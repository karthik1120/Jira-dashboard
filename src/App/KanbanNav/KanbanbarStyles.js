import styled from 'styled-components'

export const KanbanBar = styled.div`
  position: fixed;
  left: 64px;
  width: 220px;
  height: 100vh;
  z-index: 99;
  top: 0;
  border: 1px solid #dfe1e6;
  background: #f4f5f7;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  color: #42526e;

  @media (max-width: 1100px) {
    width: 200px;
  }
  @media (max-width: 999px) {
    display: none;
  }
`

export const KanbanHeaderWrapper = styled.div`
  display: flex;
`

export const KanbanHeader = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  > div#header {
    font-weight: 500;
    font-size: 14px;
  }
  > div#title {
    font-size: 12px;
    opacity: 0.5;
    padding-top: 2px;
  }
`

export const KanbanBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  > div {
    &:hover {
      cursor: pointer;
      background: #ebecf0;
      border-radius: 3px;
    }
  }
`

export const KanbanNavbar = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  > span {
    margin-right: 15px;
  }
  background: ${props => props.selected && '#ebecf0'};
  color: ${props => props.selected && '#0052cc'};
  border-radius: 3px;
`

export const KanbanNavIcon = styled.span`
  display: inline-block;
  font-size: ${props => `${props.size}px`};

  &:before {
    content: '${props => props.code}';
    font-family: 'jira' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const KanbanNavTitle = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: normal;
  font-size: 14.5px;
`

export const KanbanDivider = styled.div`
  margin: 10px 0px;
  border-top: 1px solid #c1c7d0;
`
