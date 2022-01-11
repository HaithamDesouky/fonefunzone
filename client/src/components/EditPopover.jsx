import React from 'react';
import PhoneForm from './PhoneForm/PhoneForm'

const EditPopover = ({ editingActive, phone, handleEditPhoneSubmission, triggerEditPopover }) => {
  return (
    <div class="modal-background">
      <div class="edit-phone-dialog">
        <PhoneForm
          data={phone}
          triggerEditPopover={triggerEditPopover}
          editingActive={editingActive}
          editPhone={data => handleEditPhoneSubmission(data)} />
      </div>
    </div>
  );
};

export default EditPopover;
