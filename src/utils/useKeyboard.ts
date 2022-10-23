import { Dispatch, useEffect } from 'react'
import {
  ActionsType,
  setIsOperationFinishedAC,
  setScreenValueAC,
} from '../BLL/calculatorReduser'

export function useKeyboard(
  screenValue: string,
  dispatch: Dispatch<ActionsType>,
) {
  const clearLastDigit = () => {
    if (screenValue !== '0') {
      dispatch(
        setScreenValueAC(
          screenValue.substring(0, screenValue.length - 1),
          'numeric',
        ),
      )
      dispatch(setIsOperationFinishedAC(false))
    }
    if (screenValue === '') {
      dispatch(setScreenValueAC('0', 'operator'))
    }
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      clearLastDigit()
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () =>
      document.removeEventListener('keydown', handleKeyDown)
  }, [screenValue])
}
