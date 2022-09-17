import React from "react";
import styled from "styled-components";

import { Navigate, Route, Routes } from "react-router-dom";
import { ANY_PAGE_ROUTE, ERROR404_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "./constants/router";

const Container = styled.div`
  background-color: black;
  width: 1920;
  height: 1080px;
`;

function App() {

  return (
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<div>Home</div>} />
        <Route path={SETTINGS_PAGE_ROUTE} element={<div>Settings</div>} />
        {/*<Route path={ANY_PAGE_ROUTE} element={<Navigate to={ERROR404_PAGE_ROUTE}/>}/>
        <Route path={ERROR404_PAGE_ROUTE} element={<div>Error 404</div>}/>*/}
      </Routes>
  );
}

export default App;
