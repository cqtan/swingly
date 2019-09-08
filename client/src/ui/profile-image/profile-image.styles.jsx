import styled, { css } from 'styled-components';

const selectSize = props => {
  const { xl, lg, md, sm, xs } = props;
  if (xl) 
    return css`
      width: 20rem;
      height: 20rem;
      border: 4px solid ${props => props.theme.palette.text.primary};
    `;
  else if (lg)
    return css`
      width: 14rem;
      height: 14rem;
      border: 3px solid ${props => props.theme.palette.text.primary};
    `;
  else if (md)
    return css`
      width: 8rem;
      height: 8rem;
      border: 3.5px solid ${props => props.theme.palette.text.primary};
    `;
  else if (sm)
    return css`
      width: 3.5rem;
      height: 3.5rem;
      border: 2px solid ${props => props.theme.palette.text.primary};
    `;
  else if (xs)
    return css`
      width: 2rem;
      height: 2rem;
      border: 1px solid ${props => props.theme.palette.text.primary};
    `;
  else
    return css`
      width: 3.5rem;
      height: 3.5rem;
      border: 2px solid ${props => props.theme.palette.text.primary};
    `;
}

export const ProfileImageContainer = styled.img`
  ${selectSize};
  border-radius: 50%;
  object-fit: cover;
`;
ProfileImageContainer.displayName = 'ProfileImageContainer';

