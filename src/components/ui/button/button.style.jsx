import styled from 'styled-components';

const chooseColor = props => {
  const { primary, secondary, theme } = props;
  if (primary) {
    return theme.palette.primary.main;
  } else if (secondary) {
    return theme.palette.secondary.main;
  } else {
    return theme.palette.grey[5];
  }
}

export const CustomButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(1)};
  border-radius: ${props => props.circle ? `50%` : `0.5rem`};
  background-color: ${chooseColor};
  box-shadow: ${props => props.theme.shadows[2]};
  cursor: pointer;
  ${props => props.theme.typo.button};
  transition: all .2s ease-out;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows[8]};
    filter: brightness(90%);
  }

  :active {
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
`;
CustomButton.displayName = 'CustomButton';


