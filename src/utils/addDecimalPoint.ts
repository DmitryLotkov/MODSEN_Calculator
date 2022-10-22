import { Dispatch } from 'redux'
import {
  setIsOperationFinishedAC,
  setScreenValueAC,
} from '../BLL/calculatorReduser'

export const addDecimalPoint = (
  dispatch: Dispatch,
  screenValue: string,
) => {
  dispatch(setIsOperationFinishedAC(false))
  if (!screenValue.split('').includes('.')) {
    dispatch(setScreenValueAC(screenValue + '.', 'fx'))
  } else {
    dispatch(setScreenValueAC('0.', 'fx'))
  }
}
