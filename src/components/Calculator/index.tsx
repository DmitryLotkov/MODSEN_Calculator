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
import { operatorRegExp } from "../../constants/operatorRegExp"


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
      dispatch(setScreenValueAC("0.", "numeric"))

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
    const lastNumber = screenValue[screenValue.length - 1]
    dispatch(setIsOperationFinishedAC(true))
    try {
      if (operatorRegExp.test(lastNumber)) {
        return
      }
      if (isParenthesisBalanced(screenValue) && !operatorRegExp.test(lastNumber)) {
        dispatch(setHistoryAC(screenValue))
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue)), "operator"))
      } else {
        dispatch(setScreenValueAC(screenValue.replace(/[()]/g, ""), "numeric"))
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue.replace(/[()]/g, ""))), "numeric"))
        dispatch(setHistoryAC(screenValue.replace(/[()]/g, "")))
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