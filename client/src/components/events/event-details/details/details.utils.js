import React from "react";
import { Row, Label, DataContainer, Data, DataLink } from "./details.styles";
import ProfileStack from '../../../profile-components/profile-stack/profile-stack.component';
import moment from "moment";

export const parseDate = date => moment(date).format("Do MMMM, HH:mm");

export const parseFees = fees => {
  return fees.map(data => {
    const { feeTitle, fee, slidingFee = null } = data;
    const feeText = slidingFee ? `${fee} - ${slidingFee}` : fee;
    const feeString = `${feeTitle}: (${feeText})`;
    return feeString;
  });
};

export const parseData = (key, value) => {
  if (["start", "end"].includes(key)) {
    return parseDate(value.toDate());
  } else if (["type", "location", "courseTitle"].includes(key)) {
    return value;
  } else if (["hosts"].includes(key)) {
    return value.length ? value : null;
  } else if (["fees", "otherFees"].includes(key)) {
    return value.length ? parseFees(value) : null;
  } else {
    return null;
  }
};

export const arrangeEventData = eventData => {
  const { hosts, type, location = null, start, end, otherFees, links, mapLink } = eventData;
  return { mapLink, hosts, type, location, start, end, otherFees, links };
};

export const arrangeCourseData = course => {
  const { courseTitle, location = null, start, end, fees, mapLink } = course;
  return { mapLink, courseTitle, location, start, end, fees };
}

export const createDataComponents = (dataList, key, mapLink = 'https://cat-bounce.com/') => {
  const dataComponents = dataList.map((data, index) => {
    let component = null;
    if (key === 'location') {
      component = <DataLink key={index} href={mapLink} target='_blank'>{data}</DataLink>
    } else {
      component = <Data key={index}>{data}</Data>;
    }

    return component;
  });

  return dataComponents;
}

export const formatLabel = key => {
  if (['hosts', 'type', 'location', 'start', 'end'].includes(key)) {
    return capitalizeFirstLetter(key);
  } else {
    return key;
  }
}

const capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
}

export const objToRows = obj => {
  let mapLink = '';

  return Object.entries(obj).map(([key, value]) => {
    let dataList = [];
    let parsedValue = null;

    if (key === 'mapLink') {
      mapLink = value;
    } else {
      parsedValue = parseData(key, value);
    }

    if (!parsedValue) {
      return null;
    } else if (parsedValue instanceof Array) {
      dataList = parsedValue.length ? parsedValue : null;
    } else {
      dataList.push(parsedValue);
    }

    let dataComponents = null; 
    if (key === 'hosts') {
      dataComponents = <ProfileStack hosts={dataList} />
    } else {
      dataComponents = createDataComponents(dataList, key, mapLink);
    }

    return (
      <Row key={key}>
        <Label>{formatLabel(key)}</Label>
        <DataContainer>
          {dataComponents}
        </DataContainer>
      </Row>
    )
  });
};
