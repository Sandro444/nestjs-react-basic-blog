import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid blue;
  border-top: 2px solid yellow;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;
