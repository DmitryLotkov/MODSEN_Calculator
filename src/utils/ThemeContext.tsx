import { createContext } from 'react'

export const THEMES = {
  light: 'light',
  dark: 'dark',
  color: 'colored',
}

export const ThemeContext = createContext({
  theme: THEMES.light,
  toggleTheme: () => {},
})
