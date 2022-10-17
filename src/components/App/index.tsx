import React, { useState } from "react"
import Header from "../Header"
import * as Styled from "../../components"

import { Navigate, Route, Routes } from "react-router-dom"
import { Calculator } from "../../screens/Calculator"

import { ANY_PAGE_ROUTE, ERROR404_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "../../constants/router"
import { ControlPanel } from "../../screens/ControlPanel"
import { coloredTheme, darkTheme, lightTheme } from "../../styles"
import { ThemeProvider } from "styled-components"
import { ThemeType } from "../../types"


function App() {
  const [appTheme, setAppTheme] = useState<ThemeType>("light")
  const themeMode = () => {
    switch (appTheme){
      case "light":
        return lightTheme
      case "colored":
        return coloredTheme
      case "dark":
        return darkTheme
    }
  }
  const switchTheme = () => {

    switch (appTheme){
      case "colored":
        setAppTheme("dark")
        break
      case "dark":
        setAppTheme("light")
        break
      case "light":
        setAppTheme("colored")
        break
    }

  //appTheme === "light" ? setAppTheme("dark") : setAppTheme("light")
}
  console.log(appTheme)
return (
  <ThemeProvider theme={themeMode()} /*theme={appTheme === "light" ? lightTheme : darkTheme}*/>
    <Styled.App>
      <Header />
      <Routes>
        <Route
          path={HOME_PAGE_ROUTE}
          element={<Calculator />}
        />
        <Route
          path={SETTINGS_PAGE_ROUTE}
          element={<ControlPanel appTheme={appTheme} switchTheme={switchTheme} />}
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
  </ThemeProvider>
)
}

export default App
