import { Dispatch } from 'redux'
import { setScreenValueAC } from '../BLL/calculatorReduser'

export const clearScreen = (dispatch: Dispatch) =>
  dispatch(setScreenValueAC('0', 'fx'))
