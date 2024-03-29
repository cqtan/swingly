import styled, { css } from 'styled-components';

const selectBorderColor = props => {
  const { black, white, themeColor } = props;

  if (black) {
    return `${props.theme.palette.grey[0]}`;
  } else if (white) {
    return `${props.theme.palette.grey[9]}`;
  } else if (themeColor) {
    return `${props.theme.palette.text.primary}`;
  } else {
    return `transparent`;
  }
}

const selectSize = props => {
  const { xl, lg, md, sm, xs } = props;
  if (xl) 
    return css`
      width: 20rem;
      height: 20rem;
      border: 4px solid transparent;
    `;
  else if (lg)
    return css`
      width: 14rem;
      height: 14rem;
      border: 3px solid transparent;
    `;
  else if (md)
    return css`
      width: 8rem;
      height: 8rem;
      border: 3.5px solid transparent;
    `;
  else if (sm)
    return css`
      width: 3.5rem;
      height: 3.5rem;
      border: 2px solid transparent;
    `;
  else if (xs)
    return css`
      width: 2rem;
      height: 2rem;
      border: 1px solid transparent;
    `;
  else
    return css`
      width: 3.5rem;
      height: 3.5rem;
      border: 2px solid transparent;
    `;
}

const selectRandomImage = props => {
  const { lg, md, sm, xs, theme } = props;
  if (lg) {
    return theme.images.random_lg
  } else if (md) {
    return theme.images.random_md
  } else if (sm) {
    return theme.images.random_sm
  } else if (xs) {
    return theme.images.random_xs
  } else {
    return null
  }
}

export const ProfileImageContainer = styled.img.attrs(props => ({
  src: props.src ? props.src : selectRandomImage(props)
}))`
  ${selectSize};
  border-radius: 50%;
  object-fit: cover;
  border-color: ${selectBorderColor};
  background-color: rgba(0, 0, 0, 0.20);
`;
ProfileImageContainer.displayName = 'ProfileImageContainer';

