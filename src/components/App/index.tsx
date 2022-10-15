import React from "react"
import Header from "../Header"
import * as Styled from "./components"

import { Navigate, Route, Routes } from "react-router-dom"

import { Calculator } from "../Calculator"
import { ControlPanel } from "../ControlPanel/ControlPanel"

import { ANY_PAGE_ROUTE, ERROR404_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "../../constants/router"



function App() {
  return (
   /* <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={() => theme}>*/
        <Styled.App>
          <Header />
          <Routes>
            <Route
              path={HOME_PAGE_ROUTE}
              element={<Calculator />}
            />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={<ControlPanel />}
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
    //   </ThemeProvider>
    // </ThemeContext.Provider>
  )
}

export default App