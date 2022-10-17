import * as Styled from "./component"
import { ControlPanelPropsType } from "../../types"


export const ThemeSelectorFC = ({ switchTheme, appTheme }: ControlPanelPropsType) => {

  return (
    <Styled.SelectList
      onChange={switchTheme}
      value={appTheme}>
      <Styled.OptionChange value="light">
        Light Theme
      </Styled.OptionChange><Styled.OptionChange value="colored">
        Colored Theme
      </Styled.OptionChange>
      <Styled.OptionChange value="dark">
        Dark Theme
      </Styled.OptionChange>
    </Styled.SelectList>
  )
}
