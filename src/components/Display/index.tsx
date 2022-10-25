import React, { FC } from 'react'
import * as Styled from './styled'
import { useAppSelector } from '../../BLL/store'

export const Display: FC = () => {
  const screenValue =
    useAppSelector <
    string >
    ((state) => state.keyPadPage.screenValue)
  const result =
    useAppSelector <
    string >
    ((state) => state.keyPadPage.result)

  return (
    <Styled.Display>
      <Styled.DisplayScreenValueItem id={'screenValue'}>
        {screenValue}
      </Styled.DisplayScreenValueItem>
      <Styled.DisplayResultItem id={'result'}>
        {result}
      </Styled.DisplayResultItem>
    </Styled.Display>
  )
}
