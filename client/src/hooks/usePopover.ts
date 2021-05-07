import { useDispatch } from 'react-redux'
import { showGlobalPopover, hideGlobalPopover, PopoverType } from '@globalActions'

export const usePopover = () => {
  const dispatch = useDispatch()

  const hidePopover = () => {
    dispatch(hideGlobalPopover())
  }

  const showPopover = ({ message, variant }: PopoverType) => {
    dispatch(showGlobalPopover({ message, variant }))
  }

  return { showPopover, hidePopover }
}