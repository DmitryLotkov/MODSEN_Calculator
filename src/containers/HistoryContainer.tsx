import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppStoreType } from '../BLL/store'
import { HistoryCL } from '../components/History/HistoryCL'
import { clearHistoryAC } from '../BLL/calculatorReduser'

const mapStateToProps = (state: AppStoreType) => {
  return {
    history: state.keyPadPage.history,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteAllHistory: () => dispatch(clearHistoryAC()),
  }
}

export const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryCL)
