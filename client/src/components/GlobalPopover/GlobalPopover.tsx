import { useSelector } from 'react-redux'
import { usePopover } from '@/hooks/usePopover'
import { CloseIcon } from './CloseIcon'
import { Wrapper } from "./style"

export const GlobalPopover = () => {
  const { GLOBAL_POPOVERS } = useSelector(state => state['app'])
  const { hidePopover } = usePopover()

  if (GLOBAL_POPOVERS) {
    return GLOBAL_POPOVERS.map((p, idx) => (
        <Wrapper key={idx} variant={p.variant} count={idx + 1}>
          {p.message}
          <CloseIcon onClick={hidePopover}/>
        </Wrapper>
    ))
  }

  return null
}