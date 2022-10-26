import React, { FC } from 'react'
import * as Styled from '../styled'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '@store/store'
import { clearHistoryAC } from '@store/calculatorReduser'

export const History: FC = () => {
  const { history } = useAppSelector(
    ({ keyPadPage }) => keyPadPage,
  )
  const dispatch = useDispatch()
  const historyHandler = () => {
    dispatch(clearHistoryAC())
  }
  return (
    <Styled.History id={'historyContainer'}>
      <Styled.Title>History</Styled.Title>
      <Styled.HistoryCleanButton onClick={historyHandler}>
        Clear history
      </Styled.HistoryCleanButton>
      {history.map((item, index) => (
        <Styled.HistoryItem key={index}>
          {item}
        </Styled.HistoryItem>
      ))}
    </Styled.History>
  )
}
