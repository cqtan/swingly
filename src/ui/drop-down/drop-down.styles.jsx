import styled from 'styled-components';
import { growHeight } from '../../themes/animations';

export const DropDownContainer = styled.div`
  transition: all .5s ease-out;
  background-color: #fff;
  display: flex;
  opacity: 0.5;
  ${props => growHeight(props.transName, `20rem`)};
`;
DropDownContainer.displayName = 'DropDownContainer';
