import { Component } from 'react'

import {
  Title,
  HistoryTab,
  HistoryList,
  HistoryItem,
} from '../components'

export class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { history, deleteAllHistory } = this.props

    return (
      /*<HistoryTab>
        <Title>History</Title>
        <Button deleteAllHistory={deleteAllHistory} />
        {history.map(({ expression, index }) => {
          return (
            <HistoryList key={index}>
              <HistoryItem>{expression}</HistoryItem>
            </HistoryList>
          )
        })}
      </HistoryTab>*/
      // eslint-disable-next-line react/react-in-jsx-scope
      <div>History</div>
    )
  }
}
