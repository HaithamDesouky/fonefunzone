import React, { useState, useEffect } from 'react';
import { placeHolderValues, initialFormValues } from './constants';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PhoneForm = ({
  createPhone,
  editPhone,
  data,
  editingActive,
  triggerEditPopover
}) => {
  const [phonePhoto, setFormPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const formik = useFormik({
    initialValues: data ? data : initialFormValues,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Title must be 3 characters or more')
        .max(25, 'Name too long!'),
      description: Yup.string()
        .min(
          10,
          'Hey! You can be more descriptive than that! At least 10 characters!'
        )
        .max(100, 'We said be descriptive, but not that descriptive!')
    }),
    onSubmit: values => {
      values['photo'] = phonePhoto;
      console.log(values);
      if (editingActive) {
        editPhone(values);
      } else {
        createPhone(values);
      }
    }
  });
  useEffect(() => {
    if (data && Object.keys(data).length !== 0) {
      if (data.photo) {
        setPreviewImage(data.photo);
      }
    }
  }, [data]);

  const handlePhotoInputChange = event => {
    const file = event.target.files[0];
    setFormPhoto(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handlePopoverTrigger = () => {
    triggerEditPopover();
  };

  return (
    <form className="phone-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="input-title">Title</label>
      <TextField
        variant="standard"
        id="input-title"
        type="text"
        placeholder={placeHolderValues.title}
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        required
        error={formik.errors.title}
        helperText={formik.errors.title}
      />

      <label htmlFor="input-description">Description</label>
      <TextField
        variant="standard"
        id="input-description"
        type="text"
        placeholder={placeHolderValues.description}
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        required
        error={formik.errors.description}
        helperText={formik.errors.description}
        multiline
      />

      <label htmlFor="input-price">Price</label>
      <TextField
        variant="standard"
        id="input-price"
        type="text"
        placeholder={placeHolderValues.price}
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
      />

      <label htmlFor="input-color">Color</label>
      <TextField
        variant="standard"
        id="input-color"
        type="text"
        placeholder={placeHolderValues.color}
        name="color"
        value={formik.values.color}
        onChange={formik.handleChange}
      />

      <label htmlFor="input-screen">Screen</label>
      <TextField
        variant="standard"
        id="input-screen"
        type="text"
        placeholder={placeHolderValues.screen}
        name="screen"
        value={formik.values.screen}
        onChange={formik.handleChange}
      />

      <label htmlFor="input-ram">Ram</label>
      <TextField
        variant="standard"
        id="input-ram"
        type="text"
        placeholder={placeHolderValues.ram}
        name="ram"
        value={formik.values.ram}
        onChange={formik.handleChange}
      />

      <label htmlFor="input-manufacturer">Manufacturer</label>
      <TextField
        variant="standard"
        id="input-manufacturer"
        type="text"
        placeholder={placeHolderValues.manufacturer}
        name="manufacturer"
        value={formik.values.manufacturer}
        onChange={formik.handleChange}
      />

      <label htmlFor="input-photo">Photo</label>
      {phonePhoto && <img src={previewImage} alt="Preview" />}
      <input
        id="file-input-photo"
        type="file"
        name="photo"
        onChange={handlePhotoInputChange}
      />
      <button className="primary-button" type="submit">
        {editingActive ? 'Edit Phone' : 'Create Phone'}
      </button>

      {editingActive && (
        <button className="warning-button" onClick={handlePopoverTrigger}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default PhoneForm;
