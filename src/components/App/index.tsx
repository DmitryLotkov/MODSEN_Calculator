import React from 'react';
import Header from '../Header';
import * as Styled from './components';

import { Navigate, Route, Routes } from "react-router-dom";
import { ANY_PAGE_ROUTE, ERROR404_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '../../constants/router';
import { ControlPanel } from '../../pages/ControlPanel/ControlPanel'
import { Calculator } from '../../pages/Calculator'

function App() {
  return (
    <Styled.App>
      <Header />
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE}
            element={<Calculator/>}
          />
          <Route
            path={SETTINGS_PAGE_ROUTE}
            element={<ControlPanel/>}
          />
          <Route
            path={ANY_PAGE_ROUTE}
            element={<Navigate to={ERROR404_PAGE_ROUTE} />}
          />
          <Route
            path={ERROR404_PAGE_ROUTE}
            element={<div>Error 404</div>}
          />
        </Routes>
    </Styled.App>
  );
}

export default App;
