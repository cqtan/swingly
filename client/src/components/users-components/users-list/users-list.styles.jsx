import styled, { css } from 'styled-components';
import { MonthRow, DayEvents } from '../../events/events-view-agenda/events-view-agenda.styles';

const setFilterStyles = (props) => {
  const { active, theme } = props;
  
  return css`
    ${theme.mixins.defaultBorderRadius};
    border: ${active ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.grey[7]}`};
    opacity: ${active ? 1 : 0.5};

    @media (hover: hover) {
      :hover {
        border: ${props.active && `1px solid ${props.theme.palette.primary.main}`};
        background-color: ${props.active ? props.theme.palette.primary.light : props.theme.type === "light" && props.theme.background.layer1};
      }
    }
  `;
}

export const UsersListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`;
UsersListContainer.displayName = 'UsersListContainer';

export const UsersHeader = styled(MonthRow)`
  top: 0;
  border-bottom: ${props => props.isFilter && `1px solid ${props.theme.palette.text.primary}`};
  box-shadow: ${props => props.isFilter && `none`};
  ${props => props.theme.typo.body};
  padding-right: 0.8rem;
  padding-left: 0;
`;
UsersHeader.displayName = 'UsersHeader';

export const HeaderUsername = styled.div`
  margin-right: auto;
`;
HeaderUsername.displayName = 'HeaderUsername';

export const HeaderItem = styled.div`
  flex: 0 1 24%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.typo.subtitle};
  line-height: 1.5rem;
  text-align: center;
`;
HeaderItem.displayName = 'HeaderItem';

export const UsersRow = styled(DayEvents)`
  padding: ${props => props.theme.spacing(0.5)} 0;
  padding-right: 0.8rem;
  align-items: center;
  margin: 0.5rem 0;
  border-radius: 0;
  background-color: ${props => props.active && props.isFilter ? props.theme.palette.primary.main : props.theme.background.layer3};
  color: ${props => props.active && props.isFilter ? props.theme.palette.grey[1] : props.theme.palette.text.primary};
  ${props => props.theme.typo.body};
  ${props => props.isFilter === true && setFilterStyles};
  box-shadow: none;

  @media ${props => props.theme.media.device.tablet} {
    ${props => props.theme.mixins.defaultBorderRadius};
  }

  @media (hover: hover) {
    :hover {
      background-color: ${props => props.theme.type === "light" && props.theme.background.layer1};
    }
  }
`;
UsersRow.displayName = 'UsersRow';

export const RowUsername = styled(HeaderUsername)`

`;
RowUsername.displayName = 'RowUsername';

export const RowItem = styled(HeaderItem)`
  ${props => props.theme.typo.body};
`;
RowItem.displayName = 'RowItem';