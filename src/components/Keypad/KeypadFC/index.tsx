import React, { FC } from 'react'
import * as Styled from '../styled'
import { ButtonOperationType, OperatorValueType } from '../../../types'
import { Button } from '../../Button/Button'
import { useAppSelector } from '@store/store'
import { isParenthesisBalanced } from '@helpers/isParenthesisBalanced'
import { useDispatch } from 'react-redux'
import { getButtons } from '@constants/getButtons'
import { ButtonsType, KeyPadPropsType } from "./types"

export type ButtonType = {

  label: string,
  value: OperatorValueType
  // eslint-disable-next-line prettier/prettier
  type: ButtonOperationType
}


export const Keypad: FC<KeyPadPropsType> = ({ actionToPerform }: KeyPadPropsType) => {
  const dispatch = useDispatch()
  const { screenValue, isOperationFinished} = useAppSelector(
    ({ keyPadPage }) => keyPadPage,
  )
  const isScreenClear = screenValue === "0"
  const isBalanced = isParenthesisBalanced(screenValue)
  const buttons: ButtonsType = getButtons(isScreenClear)

  const handleClickButton = (value: OperatorValueType, keyType: ButtonOperationType) => {
    actionToPerform(
      value,
      keyType,
      screenValue,
      isOperationFinished,
      isBalanced,
      dispatch,
    )
  }
  return (
    <Styled.Keypad>
      {
        buttons.map((btn, i) => <Button value={btn.value} label={btn.label}
                                        type={btn.type} key={i}
                                        onClick={handleClickButton}
        />)}
    </Styled.Keypad>
  )
}
