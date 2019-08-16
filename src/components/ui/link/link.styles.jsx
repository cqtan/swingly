import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  width: 100%;
  margin: 0;
  border-radius: 0;
  padding: 1.5rem;
  font-size: 2rem;
  background-color: ${props => {
    console.log('props: ', props);
    const { primary, secondary } = props;
    if (primary) return props.theme.palette.primary.main;
    else if (secondary) return props.theme.palette.secondary.main;
    else return props.theme.palette.grey[5];
  }};
  outline: 1px solid grey;
  transition: all .2s ease-out;

  :hover {
    filter: brightness(90%);
  }
`;
LinkContainer.displayName = LinkContainer;