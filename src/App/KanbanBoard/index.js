import React, { useState } from 'react'
import {
  KanbanBody,
  ClickableNav,
  BoardHeader,
  KanbanFilters,
  StyledIcon,
  InputFilter,
  StyledSearchIcon,
  AvatarFilter,
  Avatar,
  KanbanboardBody,
} from './styles'
import { fontIconCodes } from '../utils'
import KanbanDndComponent from './KanbanDndComponent'

const users = [
  {
    id: 'yoda',
    title: 'baby yoda',
    img: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    id: 'rick',
    title: 'pickle rick',
    img: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
  {
    id: 'starstruck',
    title: 'starstruck',
    img: 'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png',
  },
]

const KanbanBoard = () => {
  const [selectedUsers, setSelectedUsers] = useState([])

  const handleSelectAvatar = id =>
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    )

  return (
    <KanbanBody>
      <ClickableNav>
        Projects
        <span className="seperator">/</span>
        components
        <span className="seperator">/</span>
        Kanban board
      </ClickableNav>
      <BoardHeader>
        <div id={'boardHeader'}> Kanban board</div>
        <button>
          <StyledIcon code={fontIconCodes['plus']} />
          Create Issue
        </button>
      </BoardHeader>
      <KanbanFilters>
        <InputFilter>
          <StyledSearchIcon code={fontIconCodes['search']} />
          <input />
        </InputFilter>
        <AvatarFilter>
          {users.map(user => (
            <Avatar
              key={user.id}
              img={user.img}
              title={user.title}
              $selected={selectedUsers.includes(user.id)}
              onClick={() => handleSelectAvatar(user.id)}
            />
          ))}
        </AvatarFilter>
      </KanbanFilters>

      <KanbanboardBody>
        <KanbanDndComponent />
      </KanbanboardBody>
    </KanbanBody>
  )
}

export default KanbanBoard
