import React from "react";
import * as Styled from './components';
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../../constants/router";
import { NavbarLink } from './components'



export default () => {
  return (
    <Styled.Header>
      <Styled.AppTitle>Calculator App</Styled.AppTitle>
          <nav>
            <NavbarLink to={HOME_PAGE_ROUTE} >Home</NavbarLink>
            <NavbarLink to={SETTINGS_PAGE_ROUTE}>Settings</NavbarLink>
          </nav>
    </Styled.Header>
  );
};
