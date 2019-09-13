import React from 'react';
import {
  EventEditContainer,
} from './event-edit.styles';
import Modal from '../../../ui/modal/modal.component';
import Backdrop from '../../../ui/backdrop/backdrop.component';
import { Formik } from 'formik';

const EventEdit = (props) => {
  const { isOpen, onClose, event } = props;

  const onSubmit = values => {
    console.log('Event edit submission: ', values);
  }

  const initialValues = {
    isCancelled: event.cancelled,
    currency: event.currency,
    description: event.description,
    start: event.start

  }

  const validationSchema = {

  }

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