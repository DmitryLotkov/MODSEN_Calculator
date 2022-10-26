import {
  ActionsType,
  setResultAC,
  setScreenValueAC,
} from '@store/calculatorReduser'
import { Dispatch } from 'react'

export const allClear = (
  dispatch: Dispatch<ActionsType>,
) => {
  dispatch(setScreenValueAC('0', 'fx'))
  dispatch(setResultAC(''))
}
