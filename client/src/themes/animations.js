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

export const fadeInOut = (transName, direction) => css`
  &.${transName}-enter {
    opacity: 0;
    ${direction}: 0%;
  }

  &.${transName}-enter-active {
    opacity: 1;
    ${direction}: 50%;
  }

  &.${transName}-exit {
    opacity: 1;
    ${direction}: 50%;
  }

  &.${transName}-exit-active {
    opacity: 0;
    ${direction}: 0%;
  }
`

export const growHeight = (transName, heightTo) => css`
  &.${transName}-enter {
    opacity: 1;
    height: 0px;
  }

  &.${transName}-enter-active {
    opacity: 1;
    height: ${heightTo};
  }

  &.${transName}-exit {
    opacity: 1;
    height: ${heightTo};
  }

  &.${transName}-exit-active {
    opacity: 1;
    height: 0px;
  }
`