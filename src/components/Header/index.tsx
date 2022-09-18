import React from "react";
import * as Styled from './components';
import { NavLink } from "react-router-dom";
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "../../constants/router";



export default () => {
  return (
    <Styled.Header>
      Calculator App
          <nav>
            <NavLink to={HOME_PAGE_ROUTE}>Home</NavLink>
            <NavLink to={SETTINGS_PAGE_ROUTE}>Settings</NavLink>
          </nav>
    </Styled.Header>
  );
};
