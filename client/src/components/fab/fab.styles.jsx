import styled from 'styled-components';

const setBgColor = (props) => {
  const { theme, isSelected } = props;
  if (isSelected) {
    return theme.palette.primary.main;
  } else {
    return theme.palette.grey[9];
  }
}

export const FabContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-end;
  justify-content: flex-end;
  bottom: 2rem;
  right: 2rem;
  z-index: 350;
  opacity: ${props => props.isOpen ? 1 : 0.5}; 
  transition: all 0.2s ease-in .1s;
`;
FabContainer.displayName = 'FabContainer';

export const FabMain = styled.button`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.grey[7]};
`;
FabMain.displayName = 'FabMain';

export const FabSubContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  height: ${props => `${props.itemsLength * 6}rem`};
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 550;
`;
FabSubContainer.displayName = 'FabSubContainer';

export const FabSub = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${setBgColor};
`;
FabSub.displayName = 'FabSub';