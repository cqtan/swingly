import styled from 'styled-components';

export const CustomButton = styled.button`
  padding: 0 ${({ theme }) =>  theme.spacing(2)};
  ${({ theme }) =>  theme.typo.button};
`;
CustomButton.displayName = 'CustomButton';