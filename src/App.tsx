import React, { useState } from "react"

import * as Styled from './components'

import { Navigate, Route, Routes } from 'react-router-dom'

import {
  ANY_PAGE_ROUTE,
  CLASS_CALCULATOR_PAGE_ROUTE,
  ERROR404_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from './constants/router'
import { ControlPanel } from './screens/ControlPanel'
import {
  coloredTheme,
  darkTheme,
  lightTheme,
} from './styles'
import { ThemeProvider } from 'styled-components'
import { ThemeType } from './types'
import ErrorBoundary from './components/ErrorBoundary'
import { CalculatorFC } from './screens/Calculator/CalculatorFC'
import { CalculatorContainer } from './containers/CalculatorContainer'
import { Header } from './components/Header'

function App():JSX.Element {
  const [appTheme, setAppTheme] = useState <ThemeType>('light')
  const themeMode = () => {
    switch (appTheme) {
      case 'light':
        return lightTheme
      case 'colored':
        return coloredTheme
      case 'dark':
        return darkTheme
    }
  }
  const switchTheme = (theme: ThemeType) =>
    setAppTheme(theme)

  return (
    <ThemeProvider theme={themeMode()}>
      <Styled.App>
        <Header />
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE}
            element={
              <ErrorBoundary>
                <CalculatorFC />
              </ErrorBoundary>
            }
          />
          <Route
            path={CLASS_CALCULATOR_PAGE_ROUTE}
            element={
              <ErrorBoundary>
                <CalculatorContainer />
              </ErrorBoundary>
            }
          />
          <Route
            path={SETTINGS_PAGE_ROUTE}
            element={
              <ControlPanel
                appTheme={appTheme}
                switchTheme={switchTheme}
              />
            }
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
