import { css } from 'styled-components'

const font = 'Helvetica Neue'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const lightGray = '#a0a0a0'
const gray = '#707070'
const darkGray = '#434343'
const light = '#f5f5f5'
const yellowGreen = '#9ACD32'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const theme = {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    yellowGreen,
    light,
    gray,
    darkGray,
    lightGray,
    error,
    white,
    black,
  },
}

export const lightTheme = {
  colors: {
      header: darkGray,
      background: darkGray,
      backgroundHover: gray,
      backgroundColor: white,
      text: white,
  },
}

export const darkTheme = {
  colors: {
      header: darkGray,
      background: darkGray,
      backgroundHover: gray,
      backgroundColor: lightGray,
      text: white,
  },
}

export const coloredTheme = {
  colors: {
      header: yellowGreen,
      background: yellowGreen,
      backgroundHover: gray,
      backgroundColor: white,
      text: white,
  },
}
