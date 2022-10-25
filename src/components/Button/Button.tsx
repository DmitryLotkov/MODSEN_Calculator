import React, { FC } from 'react'
import * as Styled from '../Keypad/styled'
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
export const Button: FC<ButtonPropsType> = ({
  value,
  type,
  label,
  onClick,
}: ButtonPropsType) => {
  const dispatch = useDispatch()

  const {
    screenValue,
    isOperationFinished,
    result,
    lastButtonType,
  } = useAppSelector(({ keyPadPage }) => keyPadPage)
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
        (lastButtonType === 'operator' && //forbid pressing extra operator buttons one after another
          type === 'operator') ||
        (lastButtonType === 'result' && //forbid setting extra same history items
          type === 'result') ||
        (isOperationFinished && type === 'operator') //forbid pressing operator buttons after finishing operations
      }>
      {label}
    </Styled.Button>
  )
}
