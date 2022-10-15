// types
import { ButtonOperationType, OperatorType } from "../types"

// eslint-disable-next-line prettier/prettier
export enum ACTIONS_TYPE {
  SET_SCREEN_VALUE = "CALCULATOR/SET_SCREEN_VALUE",
  SET_IS_EXPECTS_OPERAND = "CALCULATOR/SET_IS_EXPECTS_OPERAND",
  SET_IS_OPERATION_FINISHED = "CALCULATOR/SET_IS_OPERATION_FINISHED",
  SET_ACCUMULATE_VALUE = "CALCULATOR/SET_ACCUMULATE_VALUE",
  SET_CURRENT_OPERATOR = "CALCULATOR/SET_CURRENT_OPERATOR",
}

export type InitialStateType = {
  screenValue: string
  isExpectsOperand: boolean
  accValue: null | number
  currentOperator: null | OperatorType
  isOperationFinished: boolean
  lastButtonType: ButtonOperationType
}

const initialState: InitialStateType = {
  screenValue: "0",
  isExpectsOperand: false,
  accValue: null,
  currentOperator: null,
  isOperationFinished: false,
  lastButtonType: "operator",
}

export type ActionsType = ReturnType<typeof setScreenValueAC>
  | ReturnType<typeof setIsOperationFinishedAC>


//Action creators
export const setScreenValueAC = (screenValue: string, lastButtonType: ButtonOperationType) => {
  console.log(lastButtonType)
  return ({ type: ACTIONS_TYPE.SET_SCREEN_VALUE, screenValue, lastButtonType } as const)
}

export const setIsOperationFinishedAC = (isOperationFinished: boolean) =>
  ({ type: ACTIONS_TYPE.SET_IS_OPERATION_FINISHED, isOperationFinished } as const)

export const calculatorReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_SCREEN_VALUE:
      return {
        ...state,
        screenValue: action.screenValue, lastButtonType: action.lastButtonType,
      }
    case ACTIONS_TYPE.SET_IS_OPERATION_FINISHED:
      return { ...state, isOperationFinished: action.isOperationFinished }
    default:
      return { ...state }
  }
}


