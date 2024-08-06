import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './ColumnDndBoard'
import { initialData } from './db.js'

const KanbanDndComponent = () => {
  const [state, setState] = useState(initialData)

  const handleDragEnd = result => {
    const { destination, source, type } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(state)
      const [removed] = newColumnOrder?.splice(source?.index, 1)
      newColumnOrder?.splice(destination?.index, 0, removed)

      const newState = [...newColumnOrder]

      setState(newState)
      return
    }

    if (source.droppableId === destination.droppableId) {
      const cardObj = Array.from(state)?.find(
        i => i?.id === destination?.droppableId
      )

      const cardArr = cardObj?.cards
      const [removed] = cardArr?.splice(source?.index, 1)
      cardArr?.splice(destination?.index, 0, removed)

      let filterArr = state?.map(i => {
        if (i.id === destination?.droppableId) {
          return { ...i, cards: cardArr }
        } else {
          return i
        }
      })

      setState(filterArr)
      return
    }

    const sourceObj = Array.from(state)?.find(
      i => i?.id === source?.droppableId
    )

    const destObj = Array.from(state).find(
      i => i?.id === destination?.droppableId
    )

    const cardArr = sourceObj.cards
    const [removed] = cardArr.splice(source.index, 1)
    destObj.cards.splice(destination.index, 0, removed)

    let filterArr = state?.map(i => {
      if (i.id === source.droppableId) {
        return { ...i, cards: cardArr }
      } else if (i.id === destination.droppableId) {
        return { ...destObj }
      } else {
        return i
      }
    })

    setState(filterArr)
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
                setState={setState}
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
