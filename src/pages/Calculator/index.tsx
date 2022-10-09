import React, { useEffect } from "react"
import { Display } from "./Display"
import { Keypad } from "./Keypad"
import { History } from "./History"
import * as Styled from "./components"
import { useAppSelector } from "../../BLL/store"
import { AdditionalOperatorType, ButtonOperationType, NumericValueType, OperatorType, OperatorValueType } from "../../constants/types"
import { useDispatch } from "react-redux"
import { setAccValueAC, setCurrentOperatorAC, setIsExpectsOperandAC, setScreenValueAC } from "../../BLL/calculatorReduser"


export const Calculator = () => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const isExpectsOperand = useAppSelector<boolean>(state => state.keyPadPage.isExpectsOperand)
  const accValue = useAppSelector<null | number>(state => state.keyPadPage.accValue)
  const currentOperator = useAppSelector<null | OperatorType>(state => state.keyPadPage.currentOperator)
  const isScreenClear = screenValue === "0";
  useEffect(()=>{
    console.log(screenValue)
  }, [screenValue])
  const clearScreen = () => {
    dispatch(setScreenValueAC("0"))
  }

  const reverseSign = () => {
    dispatch(
      setScreenValueAC(
        String(-parseFloat(screenValue),
        ),
      ),
    )
  }
  const addDecimalPoint = () => {
    if (isExpectsOperand) {
      dispatch(setScreenValueAC("0."))
    } else {
      if (!screenValue.includes("."))
        dispatch(setScreenValueAC(screenValue + "."))
    }
    dispatch(setIsExpectsOperandAC(false))
  }
  const handleClickFunctionKey = (value: OperatorValueType) => {
    const allClear = () => {
      dispatch(setAccValueAC(null))
      dispatch(setScreenValueAC("0"))
      dispatch(setCurrentOperatorAC(null))
      dispatch(setIsExpectsOperandAC(false))
    }
    switch (value) {
      case "CE":
        allClear()
        break
      case "C":
        clearScreen()
        break
      case "-":
        reverseSign()
        break
      case ".":
        addDecimalPoint()
        break
    }
  }
  const handleClickNumericKey = (inputValue: NumericValueType | AdditionalOperatorType) => {
    if (isExpectsOperand) {
      dispatch(setScreenValueAC(String(inputValue)))
      dispatch(setIsExpectsOperandAC(false))
    } else
      dispatch(setScreenValueAC(
        screenValue === "0" ? String(inputValue) : screenValue + inputValue))
  }
  const operate = (operator: OperatorType, accValue: number, inputValue: number): number => {
    switch (operator) {
      case "+":
        return accValue + inputValue
      case "-":
        return accValue - inputValue
      case "*":
        return accValue * inputValue
      case "/":
        return accValue / inputValue
      case "%":
        return accValue % inputValue
      case "=":
        return inputValue
      default:
        return inputValue
    }
  }
  const handleClickOperator = (operator: OperatorType) => {

    const inputValue = parseFloat(screenValue)
    if (accValue === null) {
      dispatch(setAccValueAC(inputValue))
      dispatch(setScreenValueAC(screenValue))
    } else {
      if (currentOperator) {
        const resultValue: number = operate(currentOperator, accValue, inputValue)
        dispatch(setAccValueAC(resultValue))
        dispatch(setScreenValueAC(String(resultValue)))
      }
    }
    dispatch(setIsExpectsOperandAC(true))
    dispatch(setCurrentOperatorAC(operator))
  }
  const handleActionToPerform = (value: OperatorValueType, keyType: ButtonOperationType) => {
    switch (keyType) {
      case "fx":
        handleClickFunctionKey(value)
        break
      case "numeric":
        handleClickNumericKey(value as NumericValueType | AdditionalOperatorType)
        break
      case "operator":
        handleClickOperator(value as OperatorType)
        break
    }
  }
  return (
    <Styled.Main>
      <Styled.Section>
        <Display />
        <Keypad actionToPerform={handleActionToPerform} allClear={isScreenClear} isExpectsOperand = {isExpectsOperand}/>
      </Styled.Section>
      <History />
    </Styled.Main>
  )
}
