import { ThemeSelectorFC } from '../../components/ThemeSelector'

import {
  SettingContainer,
  SettingTitle,
  ClearButton,
  Settingtext,
} from './styled'
import { useDispatch } from "react-redux"
import { clearHistoryAC } from "../../BLL/calculatorReduser"

export const ControlPanel = () => {
  const dispatch = useDispatch()
  const historyHandler = () =>{
    dispatch(clearHistoryAC())
  }
  return (
    <SettingContainer>
      <SettingTitle>Settings</SettingTitle>
      <Settingtext>Switch Theme</Settingtext>
      <ThemeSelectorFC />
      <ClearButton onClick={historyHandler}>Clear All History</ClearButton>
    </SettingContainer>
  )
}
