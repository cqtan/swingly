import styled from 'styled-components';

export const Divider = styled.div`
  margin: 1.5rem auto 1.5rem auto;
  width: 80%;
  border-bottom: 1px solid ${props => props.theme.palette.grey[5]};
`;
Divider.displayName = 'Divider';