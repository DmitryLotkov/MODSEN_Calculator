import { emptyParenthesisRegExp, numbersRegExp, operatorRegExp, extraParenthesisRegExp } from "../constants/regExp"
import { setHistoryAC, setIsOperationFinishedAC, setResultAC, setScreenValueAC } from "../BLL/calculatorReduser"
import { roundUpNumber } from "../helpers/roundUpNumber"
import { Dispatch } from "redux"
import { AdditionalOperatorType, ButtonOperationType, NumericValueType, OperatorValueType } from "../types"
import { allClear } from "./allClearFunction"
import { addDecimalPoint } from "./addDecimalPoint"
import { clearScreen } from "./clearScreen"


export const handleClickFunctionKey = (value: OperatorValueType, dispatch: Dispatch | undefined, screenValue: string) => {
  if (dispatch) {
    switch (value) {
      case "CE":
        allClear(dispatch)
        break
      case "C":
        clearScreen(dispatch)
        break
      case ".":
        addDecimalPoint(dispatch, screenValue)
        break
    }
  }
}

export const handleClickNumericOperatorKey = (inputValue: OperatorValueType,
                                              keyType: ButtonOperationType,
                                              dispatch: Dispatch | undefined,
                                              isOperationFinished: boolean,
                                              screenValue: string) => {
  if(dispatch)
  if (isOperationFinished) {
    dispatch(setScreenValueAC(String(inputValue), keyType))
    dispatch(setIsOperationFinishedAC(false))
    dispatch(setResultAC(""))
  } else {
    dispatch(setScreenValueAC(
      screenValue === "0" ? String(inputValue) : screenValue + inputValue, keyType))
  }
}

export const handleClickResultKey = (dispatch: Dispatch | undefined, screenValue: string, isBalanced: boolean) => {
  const lastValue = screenValue[screenValue.length - 1]
  // eslint-disable-next-line prefer-destructuring
  const firstValue = screenValue[0]
  if (dispatch) {
    try {
      if (operatorRegExp.test(firstValue) && (firstValue !== "-" && firstValue !== "+") ||
        operatorRegExp.test(lastValue)) { //handle unfinished operation
        dispatch(setScreenValueAC(screenValue.replace(operatorRegExp, ""), "numeric"))
        return
      }
      if (!numbersRegExp.test(screenValue)) { //deleting extra parenthesis case
        dispatch(setScreenValueAC(screenValue.replace(extraParenthesisRegExp, ""), "numeric"))
        dispatch(setScreenValueAC("0", "numeric"))
        return
      }

      if (isBalanced) {
        dispatch(setIsOperationFinishedAC(true))
        dispatch(setHistoryAC(screenValue))
        dispatch(setScreenValueAC(screenValue.replace(emptyParenthesisRegExp, "") + "=", "result"))
        dispatch(setResultAC(roundUpNumber(eval(screenValue.replace(emptyParenthesisRegExp, "")))))

      } else {
        /*dispatch(setIsOperationFinishedAC(false))*/
        dispatch(setScreenValueAC(screenValue.replace(extraParenthesisRegExp, "") , "result"))
        dispatch(setResultAC(roundUpNumber(eval(screenValue.replace(extraParenthesisRegExp, "")))))
        dispatch(setHistoryAC(screenValue.replace(extraParenthesisRegExp, "")))
      }
      // eslint-disable-next-line prettier/prettier
    } catch (e:any) {
      dispatch(setScreenValueAC(e.toString(), "result"))
    }
  }

}

export const handleActionToPerform = (value: OperatorValueType,
                                      keyType: ButtonOperationType,
                                      screenValue: string,
                                      isOperationFinished: boolean,
                                      isBalanced: boolean,
                                      dispatch?: Dispatch) => {
  switch (keyType) {
    case "fx":
      handleClickFunctionKey(value, dispatch, screenValue)
      break
    case "numeric":
      handleClickNumericOperatorKey(value as NumericValueType | AdditionalOperatorType,
        keyType,
        dispatch,
        isOperationFinished,
        screenValue)
      break
    case "operator":
      handleClickNumericOperatorKey(value as NumericValueType | AdditionalOperatorType,
        keyType,
        dispatch,
        isOperationFinished,
        screenValue)
      break
    case "result":
      handleClickResultKey(dispatch, screenValue, isBalanced)
      break
  }
}
