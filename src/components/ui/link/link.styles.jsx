import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  width: 100%;
  margin: 0;
  border-radius: 0;
  padding: 1.5rem;
  font-size: 2rem;
  color: ${props => props.theme.palette.primary.main};
  background-color: ${props => {
    const { primary, secondary } = props;
    if (primary) return props.theme.palette.primary.main;
    else if (secondary) return props.theme.palette.secondary.main;
    else return 'transparent';
  }};
  transition: color .2s ease-out, 
              background-color .2s ease-out;

  :hover {
    background-color: ${props => props.theme.palette.grey[3]};
  }
`;
LinkContainer.displayName = LinkContainer;