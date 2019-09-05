import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  transition: height .2s ease-out, opacity .5s ease-out;
  height: ${props => props.isOpen ? `${props.contentHeight}px` : 0};
  z-index: ${props => props.isOpen ? 100 : -100};
  opacity: ${props => props.isOpen ? 1 : 0};
  overflow: hidden;
`;
DropDownContainer.displayName = 'DropDownContainer';

export const DropDownContent = styled.div`
  position: absolute;
  transition: top .2s ease-out, opacity .5s ease-out;
  top: ${props => props.isOpen ? `0px` : `-${props.contentHeight}px`};
  opacity: ${props => props.isOpen ? 1 : 0};
`;
DropDownContent.displayName = 'DropDownContent';
