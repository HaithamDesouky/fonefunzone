import React from 'react';
import PhoneForm from './PhoneForm/PhoneForm'
import Modal from './../components/Common/Modal'

const EditPopover = ({ editingActive, phone, handleEditPhoneSubmission, triggerEditPopover }) => {
  return <Modal>
    <PhoneForm
      data={phone}
      triggerEditPopover={triggerEditPopover}
      editingActive={editingActive}
      editPhone={data => handleEditPhoneSubmission(data)} />
  </Modal>
}
export default EditPopover
