import styled, { keyframes } from 'styled-components'
import { Alert } from 'react-bootstrap-v5'

const animation = keyframes`
  from {
    top: -100%;
  }
`
type WrapperProps = {
  count: number
}
export const Wrapper = styled(Alert)<WrapperProps>`
  position: fixed;
  padding-right: 4rem;
  top: ${({ count }) => `${count}rem`};
  right: 1rem;
  z-index: 9999;
  animation: ${animation} .3s;
`

export const Svg = styled.svg`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`