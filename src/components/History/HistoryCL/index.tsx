import React, { Component } from 'react'

import * as Styled from '../styled'

type HistoryPropsType = {
  history: Array<string>,
  deleteAllHistory: () => void,
}

export class HistoryCL extends Component<HistoryPropsType> {
  constructor(props: HistoryPropsType) {
    super(props)
  }

  render() {
    const { history, deleteAllHistory } = this.props

    return (
      <Styled.History>
        <Styled.Title>History</Styled.Title>
        <Styled.HistoryCleanButton
          onClick={deleteAllHistory}>
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
}
