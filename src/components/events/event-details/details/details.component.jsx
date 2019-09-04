import React from 'react';
import {
  DetailsContainer,
  Row,
  Label,
  DataContainer,
  Data
} from './details.styles';
import moment from 'moment';

const Details = (props) => {
  const { event } = props;

  // const {
  //   courses,
  //   currency,
  //   description,
  //   end,
  //   going,
  //   host,
  //   id,
  //   interested,
  //   linkgs,
  //   location,
  //   otherFees,
  //   start,
  //   title,
  //   type
  // } = event;

  // 'courses', 'start', 'end', 'interested', 'going', 'otherFees', 'title', 'host'

  // return (
  //   <Row key={key}>
  //     <Label>{key}</Label>
  //     <Data>{value}</Data>
  //   </Row>
  // );

  const parseSecondsToData = (date) => moment(date).format("Do MMM, H:mm");
  

  const parseValue = (key, value) => {

    if (['start', 'end'].includes(key)) {
      return parseSecondsToData(value.toDate());
    } else if (['type', 'location'].includes(key)) {
      
    } else if (['links'].includes(key)) {
      return [value, value, value];
    } else {
      return null;
    }
  }

  const arrangeRows = (rows) => {

  }

  let rows = null;
  if (event) {
    rows = Object.entries(event).map(([key, value]) => {
      let dataList = [];
      value = parseValue(key, value);
      if (value instanceof Array) {
        dataList = value.length ? value : [];
      } else if (value) {
        dataList.push(value);
      }

      return ( dataList.length > 0 &&
        <Row key={key}>
          <Label>{key}</Label>
          <DataContainer>
            { dataList.map((data, index) => <Data key={index}>{data}</Data> ) }
          </DataContainer>
        </Row>
      );
    });
  }
  

  return (
    <DetailsContainer>
      { rows ? rows : <p>oops</p> }
    </DetailsContainer>
  );
}

export default Details;