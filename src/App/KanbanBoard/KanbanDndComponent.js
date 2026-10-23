import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './ColumnDndBoard'
import { matchesSearch } from '../utils'

const reorder = (list, from, to) => {
  const next = [...list]
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}

const KanbanDndComponent = ({
  columns: state,
  setColumns: setState,
  searchQuery = '',
  onOpenIssue,
}) => {
  const handleDragEnd = ({ destination, source, type }) => {
    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'column') {
      setState(reorder(state, source.index, destination.index))
      return
    }

    // Indexes from react-beautiful-dnd refer to the filtered cards, so map
    // them back to positions in the full card list.
    const sourceColumn = state.find(col => col.id === source.droppableId)
    const movedCard = sourceColumn.cards.filter(card =>
      matchesSearch(card, searchQuery)
    )[source.index]

    const destinationColumn = state.find(
      col => col.id === destination.droppableId
    )
    const destinationCards = destinationColumn.cards.filter(
      card => card.id !== movedCard.id
    )
    const visibleCards = destinationCards.filter(card =>
      matchesSearch(card, searchQuery)
    )
    const insertAt =
      destination.index < visibleCards.length
        ? destinationCards.indexOf(visibleCards[destination.index])
        : visibleCards.length
          ? destinationCards.indexOf(visibleCards[visibleCards.length - 1]) + 1
          : destinationCards.length

    setState(
      state.map(col => {
        if (col.id === destination.droppableId) {
          const cards = [...destinationCards]
          cards.splice(insertAt, 0, movedCard)
          return { ...col, cards }
        }
        if (col.id === source.droppableId) {
          return {
            ...col,
            cards: col.cards.filter(card => card.id !== movedCard.id),
          }
        }
        return col
      })
    )
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided, snapProvided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {state?.map((columnInfo, index) => (
              <Column
                key={columnInfo.id}
                column={columnInfo}
                index={index}
                searchQuery={searchQuery}
                onOpenIssue={onOpenIssue}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default KanbanDndComponent
