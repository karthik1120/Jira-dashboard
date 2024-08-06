import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import RowDraggable from './RowDnd'
import { BodyHeader } from './styles'

const ColumnDndBoard = ({ column, index, setState }) => {
  return (
    <Draggable draggableId={String(column?.id)} index={index}>
      {(dragProvided, snap) => (
        <div {...dragProvided.draggableProps} ref={dragProvided.innerRef}>
          <BodyHeader {...dragProvided.dragHandleProps}>
            {column?.title}
          </BodyHeader>
          <Droppable droppableId={String(column?.id)} type="task">
            {droppableProvided => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                style={{
                  height: '100%',
                  padding: '0px 5px',
                }}
              >
                {column?.cards?.map((rowData, index) => (
                  <RowDraggable
                    key={rowData?.id}
                    rowData={rowData}
                    index={index}
                    setState={setState}
                    columnId={column?.id}
                  />
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default ColumnDndBoard
