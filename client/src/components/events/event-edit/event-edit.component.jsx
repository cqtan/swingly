import React, { useState } from "react";
import { EventEditContainer } from "./event-edit.styles";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import EventEditForm from "./event-edit-form/event-edit-form.component";
import { editEvent, deleteEvent } from "../../../redux/events/events.actions";
import ConfirmDelete from "../../confirm-delete/confirm-delete.component";

const EventEdit = props => {
  const { event, onClose, editEvent, deleteEvent } = props;
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  const onSubmit = values => {
    console.log("Event edit submission: ", values);
    editEvent(event, values);
    onClose();
  };

  const initialValues = {
    title: event.title,
    start: event.start.toDate(),
    end: event.end.toDate(),
    location: event.location,
    mapLink: event.mapLink,
    description: event.description,
    // currency: event.currency
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Please enter a title")
      .min(2, "Title must contain at least 2 characters"),
    start: Yup.date()
      .required("Please enter a valid date")
      .min(new Date(), "Start date needs to be later than current time"),
    end: Yup.date()
      .required("Please enter a valid date")
      .min(Yup.ref("start")),
    location: Yup.string().required("Please enter the location of the event"),
    mapLink: Yup.string().required(),
    description: Yup.string().required(
      "Please enter a description of the event"
    ),
    // currency: Yup.string().required("Please enter the currency of choice")
  });

  return (
    <>
      <EventEditContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          render={formikBag => (
            <EventEditForm
              {...formikBag}
              onClose={onClose}
              onDelete={() => setDeleteOpen(true)}
            />
          )}
        />
      </EventEditContainer>
      <ConfirmDelete
        isOpen={isDeleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={() => deleteEvent(event.id)}
      />
    </>
  );
};

const mapDispatchToProps = {
  editEvent,
  deleteEvent
};

export default connect(
  null,
  mapDispatchToProps
)(EventEdit);
