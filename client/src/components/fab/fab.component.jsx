import React, { useState } from 'react';
import {
  FabContainer,
  FabSubContainer,
  FabMain,
  FabSub
} from './fab.styles';
import Backdrop from '../../ui/backdrop/backdrop.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';


// TODO: Build around events.selector for filtered property: 'none', 'interested', 'going' 
const Fab = (props) => {
  const { isOpen, setFabOpen } = props;

  const initialState = [false, false, false];
  const [isFilterToggled, setFilterToggled] = useState([false, false, false]);

  const handleFilterClick = (idx) => {
    console.log('Filter Clicked for: ', idx);
    if (isFilterToggled[idx] === true) {
      setFilterToggled(initialState);
    } else {
      const newState = initialState;
      newState[idx] = true;
      setFilterToggled(newState);
    }
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
    () => handleFilterClick(0),
    () => handleFilterClick(1),
    handleCalendarDayClick,
  ];

  const FabSubs = icons.map((icon, idx) => {
    return (
      <FabSub 
        key={idx} 
        onClick={functions[idx]} 
        isFilterToggled={isFilterToggled[idx]}>
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