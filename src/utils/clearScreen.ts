import { Dispatch } from 'redux'
import { setScreenValueAC } from '@store/calculatorReduser'

export const clearScreen = (dispatch: Dispatch) =>
  dispatch(setScreenValueAC('0', 'fx'))
