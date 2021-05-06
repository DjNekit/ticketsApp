import styled, { keyframes } from 'styled-components';

type OpenClose = {
	open: boolean
}
export const SideMenuWrapper = styled.div<OpenClose>`
	display: flex;
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
	justify-content: flex-end;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	background-color: rgba(0, 0, 0, .5);
	overflow: hidden;
	transition: visibility;
	transition-delay: ${({ open }) => (open ? '' : '.3s')};
`;

const slideOut = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 45%;
  }
`;
const slideIn = keyframes`
  from {
    width: 45%;
  }
    
  to {
    width: 0%;
  }
`;

export const Menu = styled.div<OpenClose>`
	background-color: white;
	height: 100%;
	animation: ${({ open }) => (open ? slideOut : slideIn)} .3s ease forwards;
`;
