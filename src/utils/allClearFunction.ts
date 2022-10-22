import {
  ActionsType,
  setResultAC,
  setScreenValueAC,
} from '../BLL/calculatorReduser'
import { Dispatch } from 'react'

export const allClear = (
  dispatch: Dispatch<ActionsType>,
) => {
  dispatch(setScreenValueAC('0', 'fx'))
  dispatch(setResultAC(''))
}
