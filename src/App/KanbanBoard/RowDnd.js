import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { DraggableCard, CardFooter, StyledIcon, Avatar } from './styles'
import { fontIconCodes } from '../utils'

const RowDnd = ({ rowData, index }) => {
  return (
    <Draggable
      key={rowData?.id}
      draggableId={String(rowData?.id)}
      index={index}
    >
      {draggableProvided => {
        return (
          <DraggableCard
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            ref={draggableProvided.innerRef}
          >
            <p className="card">{rowData?.title}</p>

            <CardFooter>
              <div>
                <StyledIcon
                  code={fontIconCodes['task']}
                  color="#4fade6"
                  size={'18px'}
                />
                <StyledIcon
                  code={fontIconCodes['arrow-up']}
                  color="#cd1317"
                  size={'19px'}
                />
              </div>

              <Avatar
                img={'https://i.ibb.co/6n0hLML/baby-yoda.jpg'}
                title={'baby yoda'}
                size={'24px'}
                stopHover
              />
            </CardFooter>
          </DraggableCard>
        )
      }}
    </Draggable>
  )
}

export default RowDnd
