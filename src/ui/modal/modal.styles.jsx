import styled from 'styled-components';
import { fadeInOut } from '../../themes/animations';

export const ModalContainer = styled.div`
  ${props => props.theme.mixins.absCentered};
  ${props => props.theme.mixins.defaultBorderRadius};
  min-width: 30rem;
  min-height: 30rem;
  background-color: ${props => props.theme.background.layer2};
  box-shadow: ${props => props.theme.shadows[4]};
  padding: ${props => props.theme.spacing(2)};
  z-index: 500; 
  transition: all .2s ease-out .1s;
  ${props => fadeInOut(props.transName, props.direction)};
`;
ModalContainer.displayName = 'ModalContainer';

export const ModalTitle = styled.div`
  ${props => props.theme.typo.h4};
  text-align: center;
  color: ${props => props.theme.palette.primary.main};
`;
ModalTitle.displayName = 'ModalTitle';