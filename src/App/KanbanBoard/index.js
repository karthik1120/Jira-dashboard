import React from 'react'
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

const KanbanBoard = () => {
  const handleSelectAvatar = e => {
    if (
      !e.target.style.boxShadow ||
      e.target.style.boxShadow === 'rgb(255, 255, 255) 0px 0px 0px 2px'
    )
      e.target.style.cssText =
        'box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, rgb(0, 82, 204) 0px 0px 0px 4px'
    else
      e.target.style.cssText = 'box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px'
  }

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
          <Avatar
            img={'https://i.ibb.co/6n0hLML/baby-yoda.jpg'}
            onClick={handleSelectAvatar}
            title={'baby yoda'}
          />
          <Avatar
            img={'https://i.ibb.co/7JM1P2r/picke-rick.jpg'}
            onClick={handleSelectAvatar}
            title={'baby yoda'}
          />

          <Avatar
            img={
              'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png'
            }
            onClick={handleSelectAvatar}
            title={'baby yoda'}
          />
        </AvatarFilter>
      </KanbanFilters>

      <KanbanboardBody>
        <KanbanDndComponent />
      </KanbanboardBody>
    </KanbanBody>
  )
}

export default KanbanBoard
