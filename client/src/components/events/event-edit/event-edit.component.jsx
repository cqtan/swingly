import React from 'react';
import {
  EventEditContainer,
} from './event-edit.styles';
import Modal from '../../../ui/modal/modal.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import EventEditForm from './event-edit-form/event-edit-form.component';

const EventEdit = (props) => {
  const { isOpen, onClose, event } = props;

  const onSubmit = values => {
    console.log('Event edit submission: ', values);
  }

  const initialValues = {
    title: event.title,
    isCancelled: event.cancelled,
    start: event.start.toDate(),
    end: event.end.toDate(),
    location: event.location,
    mapLink: event.mapLink,
    description: event.description,
    currency: event.currency,
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Please enter a title')
      .min(2, 'Title must contain at least 2 characters'),
    isCancelled: Yup.boolean()
      .required('This should not be visible but...Boolean please'),
    start: Yup.date()
      .required('Please enter a valid date')
      .min(Yup.ref(new Date())),
    end: Yup.date()
      .required('Please enter a valid date')
      .min(Yup.ref('start')),
    location: Yup.string()
      .required('Please enter the location of the event'),
    mapLink: Yup.string()
      .notRequired(),
    description: Yup.string()
      .required('Please enter a description of the event'),
    currency: Yup.string()
      .required('Please enter the currency of choice'),
  });

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <Modal
        isOpen={isOpen}
        transName='event-edit'
        title='Edit Event'>
        <EventEditContainer>
          <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            render={ formikBag => <EventEditForm {...formikBag} /> }
          />
        </EventEditContainer>
      </Modal>
    </>
  );
}

export default EventEdit;