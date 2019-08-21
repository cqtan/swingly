import styled, { css } from 'styled-components';

const chooseColor = props => {
  const { primary, secondary, theme } = props;
  if (primary) {
    return theme.palette.primary.main;
  } else if (secondary) {
    return theme.palette.secondary.main;
  } else{
    return `transparent`;
  }
}

const defaultButton = css`
  box-shadow: ${props => props.theme.shadows[2]};
  border-radius: 0.5rem;
  :hover {
    box-shadow: ${({ theme }) => theme.shadows[8]};
    filter: brightness(90%);
  }

  :active {
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
`;

const flatButton = css`
  border-radius: 0;
  :hover {
    background-color: ${props => props.theme.background.highlight};
  }
`;

export const CustomButton = styled.button`
  display: flex;
  width: ${props => props.stretch ? `100%` : `auto`};
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(1)};
  background-color: ${chooseColor};
  cursor: pointer;
  ${props => props.theme.typo.button};
  transition: all .2s ease-out;
  ${props => props.flat ? flatButton : defaultButton};
`;
CustomButton.displayName = 'CustomButton';


