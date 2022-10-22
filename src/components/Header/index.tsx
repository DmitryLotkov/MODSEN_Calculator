import React, { useState } from 'react'
import * as Styled from './components';
import {
  CLASS_CALCULATOR_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../../constants/router"
import { NavbarLink } from './components'
import { useLocation } from 'react-router-dom'

export type NavbarProps = {
  isactive: string;
};

export const isActive = (active: string) => (active ? `true` : `false`);

export default () => {
  const [isActive, setIsActive] = useState(true)
  const onClickHandler = () => setIsActive(!isActive)
  const location = useLocation()

  return (
    <Styled.Header>
      <Styled.AppTitle>Calculator App</Styled.AppTitle>
          <nav>
            <NavbarLink onClick={onClickHandler} isactive={(location.pathname === HOME_PAGE_ROUTE).toString()} to={HOME_PAGE_ROUTE}>CalculatorFC</NavbarLink>
            <NavbarLink onClick={onClickHandler} isactive={(location.pathname === CLASS_CALCULATOR_PAGE_ROUTE).toString()} to={CLASS_CALCULATOR_PAGE_ROUTE}>CalculatorCL</NavbarLink>
            <NavbarLink onClick={onClickHandler} isactive={(location.pathname === SETTINGS_PAGE_ROUTE).toString()} to={SETTINGS_PAGE_ROUTE}>Settings</NavbarLink>
          </nav>
    </Styled.Header>
  );
};
