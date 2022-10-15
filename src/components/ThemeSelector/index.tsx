import { OptionChange, SelectList } from './styled'
import { ThemeContext } from '../../utils'

export const ThemeSelectorFC = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <SelectList
            onChange={toggleTheme.bind(this)}
            defaultValue={theme}>
            <OptionChange value="light">
              Light Theme
            </OptionChange>
            <OptionChange value="dark">
              Dark Theme
            </OptionChange>
          </SelectList>
        )}
      </ThemeContext.Consumer>
    </>
  )
}
