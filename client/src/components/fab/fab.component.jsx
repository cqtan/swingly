import React from 'react';
import {
  FabContainer,
  FabSubContainer,
  FabMain,
  FabSub
} from './fab.styles';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';

const Fab = (props) => {
  const { isOpen, setFabOpen } = props;

  const handleStarClick = (param) => {
    console.log('Star clicked: ', param);
  }

  const handleCheckClick = (param) => {
    console.log('Check clicked: ', param);
  }

  const handleCalendarDayClick = (param) => {
    console.log('Calendar Day clicked: ', param);
  }

  const icons = [
    <FontAwesomeIcon icon='star' />,
    <FontAwesomeIcon icon='check' />,
    <FontAwesomeIcon icon='calendar-day' />
  ];

  const functions = [
    handleStarClick,
    handleCheckClick,
    handleCalendarDayClick,
  ];

  const FabSubs = icons.map((icon, idx) => {
    return (
      <FabSub key={idx} onClick={() => functions[idx]('with param')}>
        {icon}
      </FabSub>
    )
  });

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => setFabOpen(false)} />
      <FabContainer isOpen={isOpen}>
        <CSSTransition
          in={isOpen}
          classNames='fab-subs'
          timeout={300}
          unmountOnExit>
          <FabSubContainer isOpen={isOpen} itemsLength={FabSubs.length}>
            {FabSubs}
          </FabSubContainer>
        </CSSTransition>
        <FabMain onClick={() => setFabOpen(!isOpen)}  >
          { isOpen ? 
            <FontAwesomeIcon icon='times' size='2x' />
            : 
            <FontAwesomeIcon icon='ellipsis-v' size='2x' />
          }
        </FabMain>
      </FabContainer>
    </>
  );
}

export default Fab;