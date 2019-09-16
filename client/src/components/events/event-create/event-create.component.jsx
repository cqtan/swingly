import React from 'react';
import {
  EventCreateContainer,
} from './event-create.styles';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import EventCreateForm from './event-create-form/event-create-form.component';
import { createEvent } from '../../../redux/events/events.actions';

const EventCreate = (props) => {
  const { userId, createEvent } = props;

  const onSubmit = values => {
    values.hosts = [userId];
    console.log('Event edit submission: ', values);
    createEvent(values);
  }

  const initialValues = {
    title: '',
    start: null,
    end: null,
    location: '',
    mapLink: '',
    description: '',
    currency: 'euro',
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Please enter a title')
      .min(2, 'Title must contain at least 2 characters'),
    start: Yup.date()
      .required('Please enter a valid date')
      .min(new Date(), 'Start date needs to be later than current time'),
    end: Yup.date()
      .required('Please enter a valid date')
      .min(Yup.ref('start')),
    location: Yup.string()
      .required('Please enter the location of the event'),
    mapLink: Yup.string()
      .required(),
    description: Yup.string()
      .required('Please enter a description of the event'),
    currency: Yup.string()
      .required('Please enter the currency of choice'),
  });

  return (
    <EventCreateContainer>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={ formikBag => <EventCreateForm {...formikBag} /> }
      />
    </EventCreateContainer>
  );
}

const mapDispatchToProps = {
  createEvent
}

export default connect(null, mapDispatchToProps)(EventCreate);