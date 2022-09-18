import React from 'react'
import * as Styled from './components'
import { buttonData, leftColumnOperationButtonData, rightColumnOperationButtonData } from '../../../constants/ButtonData'
import { Button } from './components'

const leftColumn = leftColumnOperationButtonData.map(item => <Button key={item.id}>{item.title}</Button>)
const middleColumn = buttonData.map(item => <Button key={item.id}>{item.title}</Button>)

const rightColumn = rightColumnOperationButtonData.map(item => <Button key={item.id}>{item.title.replace("/", "\\")}</Button>)

export const Keypad = () => {
  return <Styled.Keypad>
    <Styled.SideContainer>{leftColumn}</Styled.SideContainer>
    <Styled.MiddleContainer>{middleColumn}</Styled.MiddleContainer>
    <Styled.SideContainer>{rightColumn}</Styled.SideContainer>
  </Styled.Keypad>
}
