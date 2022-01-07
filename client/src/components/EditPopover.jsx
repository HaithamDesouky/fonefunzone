import React from 'react';
import PhoneForm from './PhoneForm/PhoneForm'

const EditPopover = ({ editingActive, phone, handleEditPhoneSubmission }) => {


  return (
    <div class="modal-background">
      <div class="edit-phone-dialog">
        <PhoneForm
          data={phone}
          editingActive={editingActive}
          editPhone={data => handleEditPhoneSubmission(data)} />
      </div>
    </div>
  );
};

export default EditPopover;
