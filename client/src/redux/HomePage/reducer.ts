import * as types from './types'

export const homePageReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1

    default:
      return state
  }
}
