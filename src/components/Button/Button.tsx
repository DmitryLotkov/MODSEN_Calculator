import React from 'react'
import * as Styled from '../Keypad/components'
import {
  ButtonOperationType,
  ButtonPropsType,
} from '../../types'
import { useAppSelector } from '../../BLL/store'

export const Button = ({
  value,
  type,
  label,
  onClick,
}: ButtonPropsType) => {
  const lastOperatorType =
    useAppSelector <
    ButtonOperationType >
    ((state) => state.keyPadPage.lastButtonType)

  const handleButtonClick = () => {
    onClick(value, type)
  }

  return (
    <Styled.Button
      onClick={handleButtonClick}
      disabled={
        lastOperatorType === 'operator' &&
        type === 'operator'
      }>
      {label}
    </Styled.Button>
  )
}
