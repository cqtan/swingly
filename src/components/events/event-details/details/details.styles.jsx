import styled from 'styled-components';

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