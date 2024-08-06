import React from 'react'
import JiraIcon from '../assets/icons/JiraIcon'
import { fontIconCodes } from '../utils'
import {
  NavbarLeft,
  JiraIconWrapper,
  HeaderTitle,
  SearchWrapper,
  StyledIcon,
  SearchTitle,
  AboutSection,
} from './SideNavStyles'

const SideNavbar = () => {
  return (
    <NavbarLeft>
      <JiraIconWrapper href="/" rel="noreferrer noopener">
        <JiraIcon />
        <HeaderTitle>Jira</HeaderTitle>
      </JiraIconWrapper>
      <SearchWrapper>
        <StyledIcon code={fontIconCodes['search']} size={22} top={1} left={3} />
        <SearchTitle> search ticket</SearchTitle>
      </SearchWrapper>

      <SearchWrapper>
        <StyledIcon code={fontIconCodes['plus']} size={28} top={1} left={1} />
        <SearchTitle> create issue</SearchTitle>
      </SearchWrapper>

      <AboutSection>
        <SearchWrapper>
          <StyledIcon code={fontIconCodes['help']} size={28} top={1} left={1} />
          <SearchTitle> About</SearchTitle>
        </SearchWrapper>
      </AboutSection>
    </NavbarLeft>
  )
}

export default SideNavbar
