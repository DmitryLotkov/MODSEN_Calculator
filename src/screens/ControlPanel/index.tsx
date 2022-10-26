import { ThemeSelectorFC } from '@components/ThemeSelector'
import * as Styled from './styled'
import { useDispatch } from 'react-redux'
import { clearHistoryAC } from '@store/calculatorReduser'
import { ControlPanelPropsType } from '../../types'
import { allClear } from '@utils/allClearFunction'
import React, { FC } from 'react'

export const ControlPanel: FC<ControlPanelPropsType> = ({
  switchTheme,
  appTheme,
}: ControlPanelPropsType) => {
  const dispatch = useDispatch()
  const historyHandler = () => {
    dispatch(clearHistoryAC())
    allClear(dispatch)
  }
  return (
    <Styled.SettingContainer id={'settingsSection'}>
      <Styled.SettingTitle>Settings</Styled.SettingTitle>
      <Styled.SettingText>Switch Theme</Styled.SettingText>
      <ThemeSelectorFC
        appTheme={appTheme}
        switchTheme={switchTheme}
      />
      <Styled.ClearButton onClick={historyHandler}>
        Clear All History
      </Styled.ClearButton>
    </Styled.SettingContainer>
  )
}
