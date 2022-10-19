import React, { useEffect, useState } from "react"

import * as Styled from "./components"
import { useAppSelector } from "../../BLL/store"
import { AdditionalOperatorType, ButtonOperationType, NumericValueType, OperatorValueType } from "../../types"
import { useDispatch } from "react-redux"
import { setHistoryAC, setIsOperationFinishedAC, setResultAC, setScreenValueAC } from "../../BLL/calculatorReduser"
import { Display } from "../../components/Display"
import { Keypad } from "../../components/Keypad"
import { History } from "../../components/History/HistoryFC"
import { isParenthesisBalanced } from "../../helpers/isParenthesisBalanced"
import { roundUpNumber } from "../../helpers/roundUpNumber"
import { numbersRegExp, operatorRegExp, parenthesisRegExp } from "../../constants/regExp"
import ErrorBoundary from "../../components/ErrorBoundary"


export const Calculator = () => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const isOperationFinished = useAppSelector<boolean>(state => state.keyPadPage.isOperationFinished)
  const isScreenClear = screenValue === "0"

  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(true)

  const clearLastDigit = () => {
    if (screenValue !== "0"){
      dispatch(setScreenValueAC((screenValue.substring(0, screenValue.length - 1)), "numeric"))
      dispatch(setIsOperationFinishedAC(false))
    }
    if(screenValue === ""){
      dispatch(setScreenValueAC("0", "operator"))
    }
  }
  const handleKeyDown = (e:KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      clearLastDigit();
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown',handleKeyDown);
  }, [screenValue]);

  const handleOpenHistory = ()=> setIsHistoryOpen(!isHistoryOpen)

  const clearScreen = () => {
    dispatch(setScreenValueAC("0", "fx"))
  }

  const addDecimalPoint = () => {
    dispatch(setIsOperationFinishedAC(false))
    if (!screenValue.split("").includes(".")) {
      dispatch(setScreenValueAC(screenValue + ".", "fx"))
    } else {
      dispatch(setScreenValueAC("0.", "fx"))

    }
  }

  const allClear = () => {
    dispatch(setScreenValueAC("0", "fx"))
    /*dispatch(setIsOperationFinishedAC(false))*/
    dispatch(setResultAC(""))
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
      dispatch(setResultAC(""))
    } else {
      dispatch(setScreenValueAC(
        screenValue === "0" ? String(inputValue) : screenValue + inputValue, keyType))
    }
  }

  const handleClickResultKey = () => {
    const lastValue = screenValue[screenValue.length - 1]
    const firstValue = screenValue[0]
    dispatch(setIsOperationFinishedAC(true))
    try {
      if (operatorRegExp.test(firstValue) && (firstValue !== "-" && firstValue !== "+") || operatorRegExp.test(lastValue)) { //handle unfinished operation
        dispatch(setIsOperationFinishedAC(false))
        dispatch(setScreenValueAC(screenValue.replace(operatorRegExp, ""), "numeric"))
        return
      }
      if (!numbersRegExp.test(screenValue)) { //deleting extra parenthesis case
        dispatch(setIsOperationFinishedAC(false))
        dispatch(setScreenValueAC(screenValue.replace(parenthesisRegExp, ""), "numeric"))
        dispatch(setScreenValueAC("0", "numeric"))
        return
      }
      if (isParenthesisBalanced(screenValue)) {

        dispatch(setHistoryAC(screenValue))
        dispatch(setScreenValueAC(roundUpNumber(eval(screenValue)), "result"))
        dispatch(setResultAC(roundUpNumber(eval(screenValue))))

      } else {
        dispatch(setScreenValueAC(screenValue.replace(parenthesisRegExp, ""), "result"))
        dispatch(setScreenValueAC(screenValue, "result"))
        dispatch(setResultAC(roundUpNumber(eval(screenValue.replace(parenthesisRegExp, "")))))
        dispatch(setHistoryAC(screenValue.replace(parenthesisRegExp, "")))
      }

    } catch (e: any) {
      dispatch(setScreenValueAC(e.toString(), "result"))
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
    <ErrorBoundary>
      <Styled.Main>
        <Styled.Section>
          <Display />
          <Styled.HistoryButton onClick={handleOpenHistory}>{isHistoryOpen ? '▷' : '◁'}</Styled.HistoryButton>
          <Keypad actionToPerform={handleActionToPerform}
                  allClear={isScreenClear}
                  screenValue={screenValue} />
        </Styled.Section>
        {isHistoryOpen && <History />}
      </Styled.Main>
    </ErrorBoundary>
  )
}
