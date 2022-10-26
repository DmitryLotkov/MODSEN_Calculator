import React, { FC } from 'react'
import * as Styled from './styled'
import { useAppSelector } from '@store/store'

export const Display: FC = () => {
  const { screenValue, result } = useAppSelector(
    ({ keyPadPage }) => keyPadPage,
  )
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
