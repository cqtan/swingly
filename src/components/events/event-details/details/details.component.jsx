import React from "react";
import {
  DetailsContainer,
  Row,
  Label,
  DataContainer,
  Data,
  Divider,
  Description
  // DropDownToggle
} from "./details.styles";
import moment from "moment";
// import DropDown from '../../../../ui/drop-down/drop-down.component';

const Details = props => {
  const { event, host } = props;

  // const [isDropOpen, setDropOpen] = useState(false);

  const parseDate = date => moment(date).format("Do MMM, H:mm");

  const parseFees = fees => {
    return fees.map(data => {
      const { feeTitle, fee, slidingFee = null } = data;
      const feeText = slidingFee ? `${fee} - ${slidingFee}` : fee;
      const feeString = `${feeTitle}: (${feeText} ${event.currency})`;
      return feeString;
    });
  };

  const parseData = (key, value) => {
    if (["start", "end"].includes(key)) {
      return parseDate(value.toDate());
    } else if (["type", "location", "courseTitle", "host"].includes(key)) {
      return value;
    } else if (["links"].includes(key)) {
      return [value, value, value];
    } else if (["fees", "otherFees"].includes(key)) {
      return parseFees(value);
    } else {
      return null;
    }
  };

  const arrangeEventData = eventData => {
    const { host, type, location = null, start, end, otherFees, links } = eventData;
    return { host, type, location, start, end, otherFees, links };
  };

  const arrangeCourseData = course => {
    const { courseTitle, location = null, start, end, fees } = course;
    return { courseTitle, location, start, end, fees };
  }

  const objToRows = obj => {
    return Object.entries(obj).map(([key, value]) => {
      let dataList = [];
      value = parseData(key, value);

      if (value instanceof Array) {
        dataList = value.length ? value : [];
      } else if (value) {
        dataList.push(value);
      }

      return (
        dataList.length > 0 && (
          <Row key={key}>
            <Label>{key}</Label>
            <DataContainer>
              {dataList.map((data, index) => (
                <Data key={index}>{data}</Data>
              ))}
            </DataContainer>
          </Row>
        )
      );
    });
  };

  let details = null;
  let courses = null;

  if (event) {
    details = objToRows(arrangeEventData(event));
    courses = event.courses.map(course => objToRows(arrangeCourseData(course)));
  }

  return (
    <DetailsContainer>
      {details ? details : <p>oops</p>}
      <Divider />
      {event.description && <Description>{event.description}</Description>}
      <Divider />
      {courses ? courses : <p>oops</p>}

      {/* <DropDownToggle onClick={() => setDropOpen(!isDropOpen)}>
        DropDown Toggle
      </DropDownToggle>
      <DropDown isOpen={isDropOpen}>
        { event.description && <Description>{event.description}</Description> }
      </DropDown> */}
    </DetailsContainer>
  );
};

export default Details;
