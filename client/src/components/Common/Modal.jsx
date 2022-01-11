import React from 'react';

const Modal = ({ children }) => {
  return (
    <div class="modal-background">
      <div class="pop-up-dialog">
        {children}
      </div>
    </div>
  );
};

export default Modal;
