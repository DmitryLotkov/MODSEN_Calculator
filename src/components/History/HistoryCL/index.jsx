import React, { Component } from 'react'

import * as Styled from '../components'

export class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history, deleteAllHistory } = this.props

    return (
      <Styled.History>
        <Styled.Title>History</Styled.Title>
        {history.map((item, index) => (
          <Styled.HistoryItem key={index}>
            {item}
          </Styled.HistoryItem>
        ))}
      </Styled.History>
    )
  }
}
