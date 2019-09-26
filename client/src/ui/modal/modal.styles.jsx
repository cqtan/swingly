import styled from 'styled-components';
import { fadeInOut } from '../../themes/animations';

export const ModalContainer = styled.div`
  ${props => props.theme.mixins.absCentered};
  ${props => props.theme.mixins.defaultBorderRadius};
  position: fixed;
  background-color: ${props => props.theme.background.layer1};
  box-shadow: ${props => props.theme.shadows[4]};
  padding: ${props => props.theme.spacing(2)};
  z-index: 500; 
  transition: opacity .2s ease-out .1s;
  ${props => fadeInOut(props.transName, props.direction)};
  max-height: 90vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  width: 90%;

  @media ${props => props.theme.media.device.tablet} {
    max-width: 52rem;
  }
`;
ModalContainer.displayName = 'ModalContainer';

export const ModalTitle = styled.div`
  ${props => props.theme.typo.h4};
  text-align: center;
  color: ${({ theme })=> theme.type === "dark" ? theme.palette.primary.main : theme.palette.text.primary};
  margin-bottom: ${props => props.theme.spacing(2)};
`;
ModalTitle.displayName = 'ModalTitle';

export const ModalSubtitle = styled(ModalTitle)`
  ${props => props.theme.typo.subtitle};
  color: ${props => props.theme.palette.text.primary};
`;
ModalSubtitle.displayName = 'ModalSubtitle';