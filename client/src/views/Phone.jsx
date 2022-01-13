import { useEffect, useState } from 'react';
import { loadPhone } from '../services/phone';
import EditPopover from '../components/EditPopover'
import * as React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { phoneDelete } from '../services/phone';
import { phoneEdit } from '../services/phone';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import IndividualPhone from './../components/Common/IndividualPhone'



const PhoneView = () => {
  const [currentPhone, setPhone] = useState(null)
  const [currentlyEditing, setEditing] = useState(false)
  const history = useHistory();
  const params = useParams()

  useEffect(() => {
    if (!currentPhone) {
      loadPhone(params.id)
        .then((phone) => {
          setPhone(phone);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  )

  const triggerEditPopover = () => {
    setEditing(!currentlyEditing);
  }

  const deletePhone = (id) => {
    phoneDelete(id)
      .then((phone) => {
        history.push({ pathname: `/` });
      })
      .catch((error) => {
        alert('There was an error creating phone.');
        console.log(error);
      });
  }

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to delete this phone?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deletePhone(id)
        },
        {
          label: 'No',
        }
      ]
    });

  }

  const handleEditPhoneSubmission = (data) => {
    const { title, description, price,
      photo, manufacturer, ram, screen, color, _id } = data;

    phoneEdit(_id, {
      title, description, price, photo,
      manufacturer, ram, screen, color
    })
      .then((phone) => {
        setPhone(phone)
        setEditing(false);
      })
      .catch((error) => {
        alert('There was an error creating your phone.');
        console.log(error);
      })

  }


  return (
    <div className="individual-phone-section">
      {currentlyEditing &&
        <EditPopover
          phone={currentPhone}
          handleEditPhoneSubmission={data => handleEditPhoneSubmission(data)}
          editingActive={currentlyEditing}
          triggerEditPopover={triggerEditPopover} />}


      {currentPhone && (
        <IndividualPhone phone={currentPhone} editing={currentlyEditing} triggerEditPopover={triggerEditPopover} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default PhoneView;
