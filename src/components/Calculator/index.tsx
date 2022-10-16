import React from "react"

import * as Styled from "./components"
import { useAppSelector } from "../../BLL/store"
import { AdditionalOperatorType, ButtonOperationType, NumericValueType, OperatorValueType } from "../../types"
import { useDispatch } from "react-redux"
import { setHistoryAC, setIsOperationFinishedAC, setScreenValueAC } from "../../BLL/calculatorReduser"
import { Display } from "../Display"
import { Keypad } from "../Keypad"
import { History } from "../History/HistoryFC"
import { isParenthesisBalanced } from "../../helpers/isParenthesisBalanced"
import { roundUpNumber } from "../../helpers/roundUpNumber"
import { numbersRegExp, operatorRegExp, parenthesisRegExp } from "../../constants/regExp"



export const Calculator = () => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const isOperationFinished = useAppSelector<boolean>(state => state.keyPadPage.isOperationFinished)
  const isScreenClear = screenValue === "0"

  const clearScreen = () => {
    dispatch(setScreenValueAC("0", "fx"))
  }

  const addDecimalPoint = () => {
    dispatch(setIsOperationFinishedAC(false))
    if (!screenValue.split("").includes(".")){
      dispatch(setScreenValueAC(screenValue + ".", "fx"))
    }
    else{
      dispatch(setScreenValueAC("0.", "fx"))

    }
  }

  const allClear = () => {
    dispatch(setScreenValueAC("0", "fx"))
    dispatch(setIsOperationFinishedAC(false))
  }

  const handleClickFunctionKey = (value: OperatorValueType) => {
    switch (value) {
      case "CE":
        allClear()
        break
      case "C":
        clearScreen()
        break
      case ".":
        addDecimalPoint()
        break
    }
  }

  const handleClickNumericOperatorKey = (inputValue: OperatorValueType, keyType: ButtonOperationType) => {

    if (isOperationFinished) {
      dispatch(setScreenValueAC(String(inputValue), keyType))
      dispatch(setIsOperationFinishedAC(false))
    } else {
      dispatch(setScreenValueAC(
        screenValue === "0" ? String(inputValue) : screenValue + inputValue,keyType))
    }
  }

  const handleClickResultKey = () => {
    const lastValue = screenValue[screenValue.length - 1]
    const firstValue = screenValue[0]
    const secondValue = screenValue[1]
    dispatch(setIsOperationFinishedAC(true))
    try {
      if(operatorRegExp.test(firstValue) && (firstValue !== "-" && firstValue !== "+") || operatorRegExp.test(lastValue)){
        dispatch(setIsOperationFinishedAC(false))
        dispatch(setScreenValueAC(screenValue.replace(operatorRegExp, ""), "numeric"))
        return
      }
      if(!numbersRegExp.test(screenValue)){
        dispatch(setIsOperationFinishedAC(false))
        dispatch(setScreenValueAC(screenValue.replace(parenthesisRegExp, ""), "numeric"))
        dispatch(setScreenValueAC("0", "numeric"))
        return
      }
      if(firstValue === "-" && secondValue === "-" ){
        return //добавить предохранитель
      }
      if (isParenthesisBalanced(screenValue)) {
        dispatch(setHistoryAC(screenValue))
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue)), "operator"))
      } else {
        dispatch(setIsOperationFinishedAC(false))
        dispatch(setScreenValueAC(screenValue.replace(parenthesisRegExp, ""), "operator"))
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue.replace(parenthesisRegExp, ""))), "numeric"))
        dispatch(setHistoryAC(screenValue.replace(parenthesisRegExp, "")))
      }

    } catch (e: any) {
      dispatch(setScreenValueAC(e.toString(), "operator"))
    }
  }

  const handleActionToPerform = (value: OperatorValueType, keyType: ButtonOperationType) => {
    switch (keyType) {
      case "fx":
        handleClickFunctionKey(value)
        break
      case "numeric":
        handleClickNumericOperatorKey(value as NumericValueType | AdditionalOperatorType, keyType)
        break
      case "operator":
        handleClickNumericOperatorKey(value as NumericValueType | AdditionalOperatorType, keyType)
        break
      case "result":
        handleClickResultKey()
        break
    }
  }
  return (
    <Styled.Main>
      <Styled.Section>
        <Display />
        <Keypad actionToPerform={handleActionToPerform}
                allClear={isScreenClear}
                screenValue={screenValue} />
      </Styled.Section>
      <History />
    </Styled.Main>
  )
}
