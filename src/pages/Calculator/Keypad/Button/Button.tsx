import React from 'react'
import * as Styled from '../components'
import {
  ButtonOperationType,
  OperatorValueType,
} from '../../../../constants/buttonData'

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
  const handleButtonClick = () => {
    onClick(value, type)
  }
  return (
    <Styled.Button onClick={handleButtonClick}>
      {label}
    </Styled.Button>
  )
}
