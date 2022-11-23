import styled, { keyframes } from "styled-components";

const timing = keyframes `
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;
export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 28px;
    animation: ${timing} 2s ease infinite;
  }
`;