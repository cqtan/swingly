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

export const fadeInOut = (direction) => css`
  &.example-enter {
    opacity: 0;
    ${direction}: 0%;
  }

  &.example-enter-active {
    opacity: 1;
    ${direction}: 50%;
    transition: all 0.3s ease-out;
  }

  &.example-exit {
    opacity: 1;
    ${direction}: 50%;
  }

  &.example-exit-active {
    opacity: 0;
    ${direction}: 0%;
    transition: all 0.3s ease-out;
  }
`