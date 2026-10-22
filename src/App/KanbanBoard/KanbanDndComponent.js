import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './ColumnDndBoard'
import { initialData } from './db.js'

const reorder = (list, from, to) => {
  const next = [...list]
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}

const KanbanDndComponent = () => {
  const [state, setState] = useState(initialData)

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

    const movedCard = state.find(col => col.id === source.droppableId).cards[
      source.index
    ]

    setState(
      state.map(col => {
        const isSource = col.id === source.droppableId
        const isDestination = col.id === destination.droppableId

        if (isSource && isDestination) {
          return {
            ...col,
            cards: reorder(col.cards, source.index, destination.index),
          }
        }
        if (isSource) {
          return {
            ...col,
            cards: col.cards.filter((_, i) => i !== source.index),
          }
        }
        if (isDestination) {
          const cards = [...col.cards]
          cards.splice(destination.index, 0, movedCard)
          return { ...col, cards }
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
              <Column key={columnInfo.id} column={columnInfo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default KanbanDndComponent
