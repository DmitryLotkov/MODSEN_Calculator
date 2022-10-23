import React from 'react'
import * as Styled from '../Keypad/components'
import {
  ButtonOperationType,
  OperatorValueType,
} from '../../types'
import { useAppSelector } from '../../BLL/store'
import { useKeyboard } from '../../utils/useKeyboard'
import { useDispatch } from 'react-redux'

type ButtonPropsType = {
  value: OperatorValueType,
  onClick: (
    value: OperatorValueType,
    type: ButtonOperationType,
  ) => void,
  label: string,
  type: ButtonOperationType,
}
export const Button = ({
  value,
  type,
  label,
  onClick,
}: ButtonPropsType) => {
  const dispatch = useDispatch()
  const lastOperatorType =
    useAppSelector <
    ButtonOperationType >
    ((state) => state.keyPadPage.lastButtonType)
  const isOperationFinished =
    useAppSelector <
    boolean >
    ((state) => state.keyPadPage.isOperationFinished)
  const result =
    useAppSelector <
    string >
    ((state) => state.keyPadPage.result)
  const screenValue =
    useAppSelector <
    string >
    ((state) => state.keyPadPage.result)

  useKeyboard(screenValue, dispatch)

  const handleButtonClick = () => {
    onClick(value, type)
  }
  if (result === 'Infinity') {
    throw 'Error when try to divide to zero'
  }
  return (
    <Styled.Button
      onClick={handleButtonClick}
      disabled={
        (lastOperatorType === 'operator' && //forbid pressing extra operator buttons one after another
          type === 'operator') ||
        (lastOperatorType === 'result' && //forbid setting extra same history items
          type === 'result') ||
        (isOperationFinished && type === 'operator') //forbid pressing operator buttons after finishing operations
      }>
      {label}
    </Styled.Button>
  )
}
