import { combineReducers, legacy_createStore } from 'redux'

import {
  TypedUseSelectorHook,
  useSelector,
} from 'react-redux'
import { calculatorReducer } from './calculatorReduser'

const rootReducer = combineReducers({
  keyPadPage: calculatorReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppStoreType> =
  useSelector

export default store
