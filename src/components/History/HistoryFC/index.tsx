import React, { FC } from 'react'
import * as Styled from '../styled'
import { useAppSelector } from '../../../BLL/store'
import { clearHistoryAC } from '../../../BLL/calculatorReduser'
import { useDispatch } from 'react-redux'

export const History: FC = () => {
  const history =
    useAppSelector <
    Array <
    string >> ((state) => state.keyPadPage.history)
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
