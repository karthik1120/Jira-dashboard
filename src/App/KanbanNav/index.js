import React from 'react'
import KanbanIcon from '../assets/icons/KanbanIcon'
import { fontIconCodes } from '../utils'
import {
  KanbanBar,
  KanbanHeaderWrapper,
  KanbanHeader,
  KanbanBodyWrapper,
  KanbanNavbar,
  KanbanNavIcon,
  KanbanNavTitle,
  KanbanDivider,
} from './KanbanbarStyles'

const KanbanNav = () => {
  return (
    <KanbanBar>
      <KanbanHeaderWrapper>
        <KanbanIcon />
        <KanbanHeader>
          <div id={'header'}>Kanban board</div>
          <div id={'title'}>business project</div>
        </KanbanHeader>
      </KanbanHeaderWrapper>
      <KanbanBodyWrapper>
        <KanbanNavbar selected>
          <KanbanNavIcon
            code={fontIconCodes['board']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle> Kanban board</KanbanNavTitle>
        </KanbanNavbar>
        <KanbanNavbar>
          <KanbanNavIcon
            code={fontIconCodes['settings']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle> Project settings</KanbanNavTitle>
        </KanbanNavbar>
        <KanbanDivider />

        <KanbanNavbar>
          <KanbanNavIcon
            code={fontIconCodes['shipping']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle> Release </KanbanNavTitle>
        </KanbanNavbar>
        <KanbanNavbar>
          <KanbanNavIcon
            code={fontIconCodes['issues']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle>Issues and filter</KanbanNavTitle>
        </KanbanNavbar>
        <KanbanNavbar>
          <KanbanNavIcon
            code={fontIconCodes['page']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle>pages</KanbanNavTitle>
        </KanbanNavbar>
        <KanbanNavbar>
          <KanbanNavIcon
            code={fontIconCodes['reports']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle>Reports</KanbanNavTitle>
        </KanbanNavbar>
        <KanbanNavbar>
          <KanbanNavIcon
            code={fontIconCodes['component']}
            size={20}
            top={0}
            left={0}
          />
          <KanbanNavTitle>components</KanbanNavTitle>
        </KanbanNavbar>
      </KanbanBodyWrapper>
    </KanbanBar>
  )
}

export default KanbanNav
