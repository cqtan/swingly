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
  padding: ${({ theme }) =>  theme.spacing(1)};
  margin: ${({ theme }) =>  theme.spacing(1)};
  border-radius: 0.5rem;
  background-color: ${chooseColor};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  cursor: pointer;
  ${({ theme }) =>  theme.typo.button};
  transition: all .2s ease-out;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows[8]};
  }

  :active {
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
`;
CustomButton.displayName = 'CustomButton';


