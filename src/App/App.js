// import './App.css';
import React from 'react'
import styled from 'styled-components'
import SideNavbar from './SideNavbar'
import KanbanNav from './KanbanNav'
import KanbanBoard from './KanbanBoard'

const BoardWrapper = styled.div`
  padding: 25px 32px 50px 340px;
  @media (max-width: 1100px) {
    padding: 25px 20px 50px 314px;
  }
  @media (max-width: 999px) {
    padding-left: 84px;
  }
`

const App = () => {
  return (
    <BoardWrapper>
      <SideNavbar />
      <KanbanNav />

      <KanbanBoard />
    </BoardWrapper>
  )
}

export default App
