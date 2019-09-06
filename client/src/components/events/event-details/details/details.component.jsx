import React, { useState, useRef, useEffect } from "react";
import {
  DetailsContainer,
  Divider,
  Description,
  DropDownToggle,
  IconContainer,
  DropDownContent
} from "./details.styles";
import DropDown from "../../../../ui/drop-down/drop-down.component";
import {
  objToRows,
  arrangeEventData,
  arrangeCourseData
} from "./details.utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Details = props => {
  const { event } = props;
  const dropRef = useRef(null);
  const [isDropOpen, setDropOpen] = useState(false);
  const [dropHeight, setDropHeight] = useState(0);

  useEffect(() => {
    if (dropRef.current) {
      setDropHeight(dropRef.current.clientHeight);
    }
  }, [dropHeight]);

  const details = event && objToRows(arrangeEventData(event));
  const courses = event && event.courses.map(course => objToRows(arrangeCourseData(course)));

  return (
    <DetailsContainer>
      {details ? details : <p>oops</p>}
      <Divider />
      {event.description && <Description>{event.description}</Description>}
      <Divider />
      <DropDownToggle onClick={() => setDropOpen(!isDropOpen)}>
        Courses
        <IconContainer isOpen={isDropOpen} >
          <FontAwesomeIcon icon='caret-down' />
        </IconContainer> 
      </DropDownToggle>
      <DropDown isOpen={isDropOpen} contentHeight={dropHeight}>
        <DropDownContent ref={dropRef}>
          {courses ? courses : <p>oops</p>}
        </DropDownContent>
      </DropDown>
    </DetailsContainer>
  );
};

export default Details;
