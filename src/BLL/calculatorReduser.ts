// types
import { ButtonOperationType } from "../types"
import { maxHistoryItemsCount } from "../constants/maxHistoryitemsCount"

// eslint-disable-next-line prettier/prettier
export enum ACTIONS_TYPE {
  SET_SCREEN_VALUE = "CALCULATOR/SET_SCREEN_VALUE",
  SET_IS_OPERATION_FINISHED = "CALCULATOR/SET_IS_OPERATION_FINISHED",
  SET_HISTORY = "CALCULATOR/SET_HISTORY",
}

export type InitialStateType = {
  screenValue: string
  isOperationFinished: boolean
  lastButtonType: ButtonOperationType
  history: Array<string>
}

const initialState: InitialStateType = {
  screenValue: "0",
  isOperationFinished: false,
  lastButtonType: "operator",
  history: [],
}

export type ActionsType = ReturnType<typeof setScreenValueAC>
  | ReturnType<typeof setIsOperationFinishedAC>
  | ReturnType<typeof setHistoryAC>


//Action creators
export const setScreenValueAC = (screenValue: string, lastButtonType: ButtonOperationType) =>
  ({ type: ACTIONS_TYPE.SET_SCREEN_VALUE, screenValue, lastButtonType } as const)

export const setIsOperationFinishedAC = (isOperationFinished: boolean) =>
  ({ type: ACTIONS_TYPE.SET_IS_OPERATION_FINISHED, isOperationFinished } as const)

export const setHistoryAC = (expression:string) =>
  ({ type: ACTIONS_TYPE.SET_HISTORY, expression} as const)

export const calculatorReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_SCREEN_VALUE:
      return {
        ...state,
        screenValue: action.screenValue, lastButtonType: action.lastButtonType,
      }
    case ACTIONS_TYPE.SET_HISTORY:
        return {...state, history: state.history.concat(action.expression).filter((item, index, arr) => index >= arr.length-maxHistoryItemsCount)}
    case ACTIONS_TYPE.SET_IS_OPERATION_FINISHED:
      return { ...state, isOperationFinished: action.isOperationFinished }
    default:
      return { ...state }
  }
}


