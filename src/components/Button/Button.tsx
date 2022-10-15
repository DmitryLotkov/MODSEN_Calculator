import React, { useEffect, useState } from 'react'
import * as Styled from '../Keypad/components'
import {
  ButtonOperationType,
  OperatorValueType,
} from '../../types'
import { useAppSelector } from '../../BLL/store'

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
