import Immutable from 'seamless-immutable'
import { combineReducers } from 'redux'
import * as types from './types'

import { homePageReducer } from './HomePage/reducer'

const initialState = Immutable({
  GLOBAL_POPOVERS: []
})

const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_POPOVER:
      return state.set("GLOBAL_POPOVERS", [...state.GLOBAL_POPOVERS, payload])

    case types.REMOVE_POPOVER:
      return state.set("GLOBAL_POPOVERS", state.GLOBAL_POPOVERS.slice(0, -1))

    default:
      return state
  }
} 

export const reducers = combineReducers({
  app: globalReducer,
  homePage: homePageReducer,
})
