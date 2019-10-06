import React from 'react';
import {
  FabHelperContainer,
  HelperContentRow
} from './fab-helper.styles';
import { H3, Content } from '../../../pages/about-page/about-page.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FabHelper = (props) => {
  return (
    <FabHelperContainer>
      <H3>Filter Events and Today Selector</H3>
        <Content>
          <HelperContentRow>
            <FontAwesomeIcon icon="star" /> &nbsp;&nbsp;
            Show events that you have marked as "interested"
          </HelperContentRow>
          <HelperContentRow>
            <FontAwesomeIcon icon="check" /> &nbsp;&nbsp;
            Show events that you have marked as "going"
          </HelperContentRow>
          <HelperContentRow>
            <FontAwesomeIcon icon="users" /> &nbsp;
            Show events of users you have followed
          </HelperContentRow>
          <HelperContentRow>
            <FontAwesomeIcon icon="calendar-day" /> &nbsp;&nbsp;
            Quickly scroll to events of today
          </HelperContentRow>
        </Content>
    </FabHelperContainer>
  );
}

export default FabHelper; 