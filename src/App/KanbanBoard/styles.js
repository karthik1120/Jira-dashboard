import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

export const KanbanBody = styled.div``

export const ClickableNav = styled.div`
  color: #5e6c84;
  font-size: 15px;
  text-transform: capitalize;
  cursor: pointer;

  > span.seperator {
    position: relative;
    top: 1px;
    font-size: 18px;
    margin: 0 10px;
    cursor: default;
  }
`

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > div#boardHeader {
    font-size: 24px;
    margin: 10px 0;
    font-family: CircularStdMedium;
  }
  button {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    color: #42526e;
    background-color: #f4f5f7;
    padding: 10px;
    height: 34px;
    border-radius: 3px;
    font-family: CircularStdBook;
    border: none;
    cursor: pointer;
    > i {
      padding-right: 5px;
    }
  }
`
export const StyledIcon = styled.i`
  display: inline-block;
  font-size: ${props => (props.size ? props.size : '20px')};
  color: ${props => props.color && props.color};

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

export const KanbanFilters = styled.div`
  display: flex;
  margin: 20px 0 20px;
`

export const StyledSearchIcon = styled.i`
  position: absolute;
  display: inline-block;
  font-size: 16px;
  top: 8px;
  left: 8px;

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

export const InputFilter = styled.div`
  display: inline-flex;
  border-radius: 3px;
  border: 1px solid #dfe1e6;
  position: relative;
  width: 160px;
  height: 32px;
  margin-right: 20px;

  input {
    width: 100%;
    border: none;
    background: #f4f5f7;
    outline: none;
    padding: 0px 0px 0px 32px;
    border-radius: 3px;
    &:hover {
      background: #ebecf0;
    }

    &:focus {
      background: white;
      border: 1px solid #4c9aff;
      box-shadow: #4c9aff 0px 0px 0px 1px;
    }
  }
`
export const AvatarFilter = styled.div`
  display: flex;
  align-items: center;
`
export const Avatar = styled.div`
  height: ${props => (props.size ? props.size : '32px')};
  width: ${props => (props.size ? props.size : '32px')};
  background: #ebecf0;
  text-align: center;
  /* margin-left: -5px; */
  border-radius: 50%;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px;
  cursor: pointer;
  ${props => props.img && `background-image: url(${props.img})`};
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;

  ${props =>
    props.stopHover
      ? ''
      : '&:hover {  transform: translateY(-5px); transition: transform 0.1s ease 0s; }'}
`

export const KanbanboardBody = styled.div`
  margin-left: -5px;
  > div {
    display: flex;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    margin: 0px 5px;
    min-height: 400px;
    width: 25%;
    min-width: 155px;
    border-radius: 3px;
    background: #f4f5f7;
  }
`

export const BodyHeader = styled.div`
  padding: 13px 10px 17px;
  text-transform: uppercase;
  color: #5e6c84;
  font-size: 12.5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const DraggableCard = styled.div`
  cursor: grab;
  touch-action: manipulation;
  padding: 10px;
  border-radius: 3px;
  background: white;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 2px 0px;
  transition: background 0.1s ease 0s;
  cursor: pointer;
  user-select: none;
  margin-bottom: 5px;

  &:hover {
    background-color: #ebecf0;
  }

  > p {
    padding-bottom: 11px;
    font-size: 15px;
    margin: 0 !important;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    vertical-align: middle;
  }
`
