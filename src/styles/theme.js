import { css } from "styled-components"

export const font = "Arial"
// Color palette
export const black = '#000000'
export const white = '#ffffff'
export const error = '#c86464'
export const primary = '#c06c84'
export const secondary = '#6c5b7b'
export const secondaryLight = '#6a6b7b'
export const headerBGColor = '#434343'
export const buttonBGColor = '#f2f2f2'
export const borderColor = '#707070'
const lightGray = '#a0a0a0'
const gray = '#707070'
const darkGray = '#434343'
const boxShadows = [
  "box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)",
];

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  above,
  below,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    error,
  },
};

export const lightTheme = {
  colors: {
    header: darkGray,
    background: white,
    backgroundHover: lightGray,
    backgroundColor: buttonBGColor,
    text: black,
    border: `2px solid ${borderColor}`,
  },
}

export const darkTheme = {
  colors: {
    header: black,
    background: darkGray,
    backgroundHover: gray,
    backgroundColor: darkGray,
    text: white,
    border: `2px solid ${white}`,
  },
}
export const coloredTheme = {
  colors: {
    header: darkGray,
    background: primary,
    border: `2px solid ${white}`,
    backgroundHover: gray,
    backgroundColor: primary,
    text: white,
  },
}
