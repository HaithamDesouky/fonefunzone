import React from 'react';
import PhoneForm from './PhoneForm/PhoneForm'
import { phoneEdit } from '../services/phone';
import { useHistory } from "react-router";

const EditPopover = ({ editingActive, phone, triggerEditPopover }) => {
  const history = useHistory();

  const handleEditFormSubmission = (data) => {
    const { title, description, price,
      photo, manufacturer, ram, screen, color, _id } = data;

    phoneEdit(_id, {
      title, description, price, photo,
      manufacturer, ram, screen, color
    })
      .then((phone) => {
        triggerEditPopover()
        history.go(0)
      })
      .catch((error) => {
        alert('There was an error creating your phone.');
        console.log(error);
      })
  }

  return (
    <div class="modal-background">
      <div class="edit-phone-dialog">
        <PhoneForm
          data={phone}
          editingActive={editingActive}
          triggerEditPopover={triggerEditPopover}
          editPhone={data => handleEditFormSubmission(data)} />
      </div>
    </div>
  );
};

export default EditPopover;
