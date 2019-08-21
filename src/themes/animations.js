import { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const animateFadeIn = css`
  animation-fill-mode: backwards;
  animation: ${fadeIn} .2s ease-out;
`;