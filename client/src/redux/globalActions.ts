import * as types from './types'

export type PopoverType = {
  variant?: string,
  message: string
}

export const showGlobalPopover = ({ variant = 'danger', message }: PopoverType) => {
  return {
    type: types.ADD_POPOVER,
    payload: {
      variant,
      message
    }
  }
}

export const hideGlobalPopover = () => {
  return {
    type: types.REMOVE_POPOVER,
    payload: null
  }
}