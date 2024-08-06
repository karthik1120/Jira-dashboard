import styled from 'styled-components'

export const NavbarLeft = styled.aside`
  width: 64px;
  background-color: #0747a6;
  height: 100vh;
  color: white;
  position: fixed;
  top: 0px;
  z-index: 100;
  left: 0px;
  overflow: hidden;
  transition: all 0.1s ease 0s;
  transform: translateZ(0px);

  &:hover {
    width: 200px;
    transition: all ease 0.1s;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 50px 0px;
  }
`

export const StyledIcon = styled.i`
  display: inline-block;
  font-size: ${props => `${props.size}px`};
  ${props =>
    props.left || props.top
      ? `transform: translate(${props.left}px, ${props.top}px);`
      : ''}
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
  position: absolute;
  left: 18px;
`

export const JiraIconWrapper = styled.a`
  text-decoration: none;
  color: white;
  display: inline-flex;
  margin: 30px 18px 20px;
  > svg {
    padding-right: 18px;
  }

  > div {
    opacity: 1;
    visibility: visible;
    right: 0;
  }
`

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const SearchWrapper = styled.div`
  position: relative;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: rgb(222, 235, 255);
  transition: color 0.1s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const AboutSection = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`

export const SearchTitle = styled.div`
  position: relative;
  text-transform: uppercase;
  font-family: CircularStdBold;
  font-weight: normal;
  font-size: 12px;
  right: 0;
`
