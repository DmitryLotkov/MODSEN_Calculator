// types

import { OperatorType } from "../constants/types"

// eslint-disable-next-line prettier/prettier
export enum ACTIONS_TYPE {
  SET_SCREEN_VALUE= "CALCULATOR/SET_SCREEN_VALUE",
  SET_IS_EXPECTS_OPERAND= "CALCULATOR/SET_IS_EXPECTS_OPERAND",
  SET_ACCUMULATE_VALUE= "CALCULATOR/SET_ACCUMULATE_VALUE",
  SET_CURRENT_OPERATOR= "CALCULATOR/SET_CURRENT_OPERATOR",
}
export type InitialStateType = {
  screenValue: string
  // eslint-disable-next-line prettier/prettier
  isExpectsOperand: boolean
  accValue: null | number
  currentOperator: null | OperatorType
}

const initialState: InitialStateType = {
  screenValue: "0",
  isExpectsOperand: false,
  accValue: null ,
  currentOperator: null,
}


export type ActionsType = ReturnType<typeof setScreenValueAC>
  | ReturnType<typeof setIsExpectsOperandAC>
  | ReturnType<typeof setCurrentOperatorAC>
  | ReturnType<typeof setAccValueAC>

//Action creators
export const setScreenValueAC = (screenValue: string) => ({ type: ACTIONS_TYPE.SET_SCREEN_VALUE, screenValue } as const)
export const setIsExpectsOperandAC = (isExpectsOperand: boolean) => ({ type: ACTIONS_TYPE.SET_IS_EXPECTS_OPERAND, isExpectsOperand } as const)
export const setAccValueAC = (accValue: null | number) => ({ type: ACTIONS_TYPE.SET_ACCUMULATE_VALUE, accValue } as const)
export const setCurrentOperatorAC = (currentOperator: null| OperatorType) => ({ type: ACTIONS_TYPE.SET_CURRENT_OPERATOR, currentOperator } as const)

export const calculatorReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_SCREEN_VALUE:
      return { ...state, screenValue: action.screenValue}
    case ACTIONS_TYPE.SET_IS_EXPECTS_OPERAND:
      return {...state, isExpectsOperand: action.isExpectsOperand}
    case ACTIONS_TYPE.SET_CURRENT_OPERATOR:
      return {...state, currentOperator: action.currentOperator}
    case ACTIONS_TYPE.SET_ACCUMULATE_VALUE:
      return {...state, accValue: action.accValue}
    default:
      return { ...state }
  }
}








