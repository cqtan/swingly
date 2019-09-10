import styled from 'styled-components';

export const VerticalDivider = styled.div`
  margin: auto 1.5rem auto 1.5rem;
  height: 70%;
  border-right: 1px solid ${props => props.theme.palette.grey[5]};
`;
VerticalDivider.displayName = 'VerticalDivider';