import styled, { css } from "styled-components";
import { FormButtonContainer } from "../../ui/form-elements/form-button/form-button.styles";

export const EventsPageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    margin-top: ${theme.layout.header.height};
    padding-bottom: 10rem;

    @media ${theme.media.device.tablet} {
      max-width: ${theme.media.size.tablet};
    }
  `};
`;
EventsPageContainer.displayName = "EventsPageContainer";

export const ShowOlderButton = styled(FormButtonContainer)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(1)};
  `};
`;
ShowOlderButton.displayName = "ShowOlderButton";
