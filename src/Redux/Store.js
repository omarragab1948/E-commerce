import { createStore } from 'redux'
import { RootReducer } from './RootReducers'
export const Store = createStore(RootReducer)
