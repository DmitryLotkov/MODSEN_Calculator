import React from "react"

import * as Styled from "./components"
import { useAppSelector } from "../../BLL/store"
import { AdditionalOperatorType, ButtonOperationType, NumericValueType, OperatorValueType } from "../../types"
import { useDispatch } from "react-redux"
import { setIsOperationFinishedAC, setScreenValueAC } from "../../BLL/calculatorReduser"
import { Display } from "../Display"
import { Keypad } from "../Keypad"
import { History } from "../History"
import { isParenthesisBalanced } from "../../helpers/isParenthesisBalanced"
import { roundUpNumber } from "../../helpers/roundUpNumber"


export const Calculator = () => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const isOperationFinished = useAppSelector<boolean>(state => state.keyPadPage.isOperationFinished)
  const isScreenClear = screenValue === "0"

  const clearScreen = () => {
    dispatch(setScreenValueAC("0", "operator"))
  }

  const addDecimalPoint = () => {
    dispatch(setScreenValueAC("0.", "operator"))
    if (!screenValue.includes("."))
      dispatch(setScreenValueAC(screenValue + ".", "operator"))
  }

  const allClear = () => {
    dispatch(setScreenValueAC("0", "operator"))
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

  const handleClickNumericKey = (inputValue: OperatorValueType, keyType: ButtonOperationType) => {

    if (isOperationFinished) {
      dispatch(setScreenValueAC(String(inputValue), keyType))
      dispatch(setIsOperationFinishedAC(false))
    } else {
      dispatch(setScreenValueAC(
        screenValue === "0" ? String(inputValue) : screenValue + inputValue,keyType))
    }
  }

  const handleClickResultKey = () => {
    const expressions = /\+|-|\/|\*|%|=|[A-z]| /
    const lastNumber = screenValue[screenValue.length - 1]

    dispatch(setIsOperationFinishedAC(true))
    try {
      if (expressions.test(lastNumber)) {
        return
      }
      if (isParenthesisBalanced(screenValue) && !expressions.test(lastNumber)) {
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue)), "operator"))
      } else {
        dispatch(setScreenValueAC(screenValue.replace(/[()]/g, ""), "numeric"))
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue.replace(/[()]/g, ""))), "numeric"))
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
        handleClickNumericKey(value as NumericValueType | AdditionalOperatorType, "numeric")
        break
      case "operator":
        handleClickNumericKey(value as NumericValueType | AdditionalOperatorType, "operator")
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
