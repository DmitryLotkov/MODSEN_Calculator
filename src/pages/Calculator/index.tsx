import React from 'react'
import { Display } from './Display'
import { Keypad } from './Keypad'
import { History } from './History'
import * as Styled from './components'
export const Calculator = () => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Display />
        <Keypad />
      </Styled.Container>
      <History />
    </Styled.Section>
  )
}
