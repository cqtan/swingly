import styled from 'styled-components';
import Button from '../../../../ui/button/button.component';

export const DetailsContainer = styled.div`
  
`;
DetailsContainer.displayName = 'DetailsContainer';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: ${props => props.theme.typo.subtitle};
  line-height: 1.8rem;
`;
Row.displayName = 'Row';

export const Label = styled.div`
  flex: 1 1 25%;
  color: ${props => props.theme.palette.text.secondary};
`;
Label.displayName = 'Label';

export const DataContainer = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-wrap: wrap;
`;
DataContainer.displayName = 'DataContainer';

export const Data = styled.div`
  flex: 1 1 100%;
  color: ${props => props.theme.palette.text.primary};
`;
Data.displayName = 'Data';

export const Divider = styled.div`
  margin: 1.5rem auto 1.5rem auto;
  width: 80%;
  border-bottom: 1px solid ${props => props.theme.palette.grey[5]};
`;
Divider.displayName = 'Divider';

export const Description = styled.div`
  font-size: ${props => props.theme.typo.subtitle};
  color: ${props => props.theme.palette.text.primary};
`;
Description.displayName = 'Description';

export const DropDownToggle = styled(Button)`
  background-color: transparent;
  margin: 0 auto;
  box-shadow: none;
  color: ${props => props.theme.palette.text.primary};

  :hover {
    color: ${props => props.theme.palette.primary.main};
    box-shadow: none;
  }

  :active {
    box-shadow: none;
  }
`;
DropDownToggle.displayName = 'DropDownToggle';

export const DropDownContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
DropDownContent.displayName = 'DropDownContent';

export const IconContainer = styled.div`
  & > svg {
    font-size: 2rem;
    margin: 0 1rem;
  }

  color: ${props => props.isOpen && props.theme.palette.primary.main};

  transition: all .2s ease-out;
  transform-origin: center;
  transform: ${props => props.isOpen ? `rotate(180deg)` : `rotate(0)`};
`;
IconContainer.displayName = 'IconContainer';

