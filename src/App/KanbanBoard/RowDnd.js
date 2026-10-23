import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { DraggableCard, CardFooter, StyledIcon, Avatar } from './styles'
import { fontIconCodes } from '../utils'
import { users, getCardPriority, getCardAssigneeId } from './db'

const RowDnd = ({ rowData, index, onOpen }) => {
  const priority = getCardPriority(rowData)
  // Issues assigned "Automatic" have a null assignee and render unassigned
  const assignee = users.find(u => u.id === getCardAssigneeId(rowData))

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
            onClick={() => onOpen(rowData)}
            onKeyDown={e => {
              if (e.key === 'Enter') onOpen(rowData)
            }}
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
                  code={fontIconCodes[priority.icon]}
                  color={priority.color}
                  size={'19px'}
                />
              </div>

              <Avatar
                img={assignee?.img}
                title={assignee?.title ?? 'Unassigned'}
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
