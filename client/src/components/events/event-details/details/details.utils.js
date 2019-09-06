import React from "react";
import { Row, Label, DataContainer, Data } from "./details.styles";
import moment from "moment";

export const parseDate = date => moment(date).format("Do MMM, H:mm");

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

export const arrangeEventData = eventData => {
  const { host, type, location = null, start, end, otherFees, links } = eventData;
  return { host, type, location, start, end, otherFees, links };
};

export const arrangeCourseData = course => {
  const { courseTitle, location = null, start, end, fees } = course;
  return { courseTitle, location, start, end, fees };
}

export const objToRows = obj => {
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
