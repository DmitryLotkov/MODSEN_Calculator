import * as Styled from "./component"
import { ControlPanelPropsType, ThemeType } from "../../types"
import { ChangeEvent } from "react"
import React from 'react'

export const ThemeSelectorFC = ({ switchTheme, appTheme }: ControlPanelPropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    // eslint-disable-next-line prettier/prettier
    switchTheme(e.currentTarget.value as ThemeType)
  }
  return (
    <Styled.SelectList
      onChange={onChangeHandler}
      value={appTheme}>
      <Styled.OptionChange value="light">
        Light Theme
      </Styled.OptionChange>
      <Styled.OptionChange value="colored">
      Colored Theme
      </Styled.OptionChange>
      <Styled.OptionChange value="dark">
        Dark Theme
      </Styled.OptionChange>
    </Styled.SelectList>
  )
}
