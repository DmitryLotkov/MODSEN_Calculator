import { ThemeSelectorFC } from '../../components/ThemeSelector'
import * as Styled from "./component"

import { useDispatch } from "react-redux"
import { clearHistoryAC } from "../../BLL/calculatorReduser"
import { ControlPanelPropsType } from "../../types"



export const ControlPanel = ({switchTheme, appTheme}:ControlPanelPropsType) => {
  const dispatch = useDispatch()
  const historyHandler = () => {
    dispatch(clearHistoryAC())
  }
  return (
    <Styled.SettingContainer>
      <Styled.SettingTitle>Settings</Styled.SettingTitle>
      <Styled.SettingText>Switch Theme</Styled.SettingText>
      <ThemeSelectorFC appTheme={appTheme} switchTheme={switchTheme}/>
      <Styled.ClearButton onClick={historyHandler}>Clear All History</Styled.ClearButton>
    </Styled.SettingContainer>

  )
}
