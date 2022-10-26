import React, { FC, useState } from 'react'
import * as Styled from './styled'
import {
  CLASS_CALCULATOR_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@constants/router'
import { NavbarLink } from './styled'
import { useLocation } from 'react-router-dom'

export type NavbarProps = {
  isactive: string,
}

export const Header: FC = () => {
  const [isActive, setIsActive] = useState(true)
  const onClickHandler = () => setIsActive(!isActive)
  const location = useLocation()

  return (
    <Styled.Header>
      <Styled.AppTitle>Calculator App</Styled.AppTitle>
      <nav>
        <NavbarLink
          onClick={onClickHandler}
          isactive={(
            location.pathname === HOME_PAGE_ROUTE
          ).toString()}
          to={HOME_PAGE_ROUTE}>
          HomeFC
        </NavbarLink>
        <NavbarLink
          onClick={onClickHandler}
          isactive={(
            location.pathname ===
            CLASS_CALCULATOR_PAGE_ROUTE
          ).toString()}
          to={CLASS_CALCULATOR_PAGE_ROUTE}>
          HomeCL
        </NavbarLink>
        <NavbarLink
          onClick={onClickHandler}
          isactive={(
            location.pathname === SETTINGS_PAGE_ROUTE
          ).toString()}
          to={SETTINGS_PAGE_ROUTE}>
          Settings
        </NavbarLink>
      </nav>
    </Styled.Header>
  )
}
