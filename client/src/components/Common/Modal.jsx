import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="modal-background">
      <div className="pop-up-dialog">
        {children}
      </div>
    </div>
  );
};

export default Modal;
