import React from "react"
import * as Styled from "../components"
import { ActionToPerformType, ButtonOperationType, OperatorValueType } from "../../../types"
import { Button } from "../../Button/Button"
import { useAppSelector } from "../../../BLL/store"
import { isParenthesisBalanced } from "../../../helpers/isParenthesisBalanced"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

export type ButtonType = {
  label: string,
  value: OperatorValueType
  type: ButtonOperationType
}

export type ButtonsType = Array<ButtonType>
type KeyPadPropsType = {
  actionToPerform: ActionToPerformType,
}
export const Keypad = ({actionToPerform}:KeyPadPropsType) => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const isOperationFinished = useAppSelector<boolean>(state => state.keyPadPage.isOperationFinished)
  const isScreenClear = screenValue === "0"
  const isBalanced = isParenthesisBalanced(screenValue)

  const buttons:ButtonsType = [
    { label: '%', value: '%', type: 'operator' },
    { label: '7', value: 7, type: 'numeric' },
    { label: '8', value: 8, type: 'numeric' },
    { label: '9', value: 9, type: 'numeric' },
    { label: '*', value: '*', type: 'operator' },
    { label: '-', value: '-', type: screenValue === "0"  ? 'numeric': 'operator'},
    { label: '4', value: 4, type: 'numeric' },
    { label: '5', value: 5, type: 'numeric' },
    { label: '6', value: 6, type: 'numeric' },
    { label: '\\', value: '/', type: 'operator' },
    { label: '+', value: '+', type: 'operator' },
    { label: '1', value: 1, type: 'numeric' },
    { label: '2', value: 2, type: 'numeric' },
    { label: '3', value: 3, type: 'numeric' },
    { label: '=', value: '=', type: 'result' },
    { label: '.', value: '.', type: 'fx' },
    { label: '(', value: '(', type: 'numeric' },
    { label: '0', value: '0', type: 'numeric' },
    { label: ')', value: ')', type: 'numeric' },
    {
      label: isScreenClear  ? 'CE' : 'C',
      value: isScreenClear ? 'CE' : 'C',
      type: 'fx',
    },
  ]

  const handleClickButton = (value:OperatorValueType, keyType:ButtonOperationType) => {
    actionToPerform(
      value,
      keyType,
      screenValue,
      isOperationFinished,
      isBalanced,
      dispatch
      );
  }
  return (
    <Styled.Keypad>
      {
        buttons.map((btn, i) => <Button value={btn.value} label={btn.label} type={btn.type} key={i} onClick={handleClickButton}
           />)}
    </Styled.Keypad>
  )
}
