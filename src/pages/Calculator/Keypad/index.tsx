import React from "react"
import * as Styled from "./components"
import {
  ButtonOperationType, ButtonsType, KeyPadPropsType, OperatorValueType,
} from "../../../types/types"

import { Button } from "./Button/Button"

export const Keypad = ({actionToPerform, allClear, screenValue}:KeyPadPropsType) => {
  const buttons:ButtonsType = [
    { label: '%', value: '%', type: 'operator' },
    { label: '7', value: 7, type: 'numeric' },
    { label: '8', value: 8, type: 'numeric' },
    { label: '9', value: 9, type: 'numeric' },
    { label: '*', value: '*', type: 'operator' },
    { label: '-', value: '-', type:  screenValue === "0"  ? 'numeric': 'operator'},
    { label: '4', value: 4, type: 'numeric' },
    { label: '5', value: 5, type: 'numeric' },
    { label: '6', value: 6, type: 'numeric' },
    { label: '\\', value: '/', type: 'operator' },
    { label: '+', value: '+', type: 'operator' },
    { label: '1', value: 1, type: 'numeric' },
    { label: '2', value: 2, type: 'numeric' },
    { label: '3', value: 3, type: 'numeric' },
    { label: '=', value: '=', type: 'operator' },
    { label: '.', value: '.', type: 'fx' },
    { label: '(', value: '(', type: 'numeric' },
    { label: '0', value: '0', type: 'numeric' },
    { label: ')', value: ')', type: 'numeric' },
    {
      label: allClear  ? 'CE' : 'C',
      value: allClear ? 'CE' : 'C',
      type: 'fx',
    },
  ]
  // check brackets are balanced or not
  const checkBracketBalanced = (expr:string) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };
  const handleClickButton = (value:OperatorValueType, keyType:ButtonOperationType) => {
    actionToPerform(value, keyType);
  }
  return (
    <Styled.Keypad>
      {
        buttons.map((btn, i) => <Button value={btn.value} label={btn.label} type={btn.type} key={i} onClick={handleClickButton}
           />)}
    </Styled.Keypad>
  )
}
