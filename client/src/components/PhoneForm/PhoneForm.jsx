import React, { useState, useEffect } from 'react';
import { defaultPhoneFormData } from './constants'

const PhoneForm = ({ createPhone, editPhone, data, editingActive, triggerEditPopover }) => {
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null)

  useEffect(() => {
    if (data) {
      if (Object.keys(data).length !== 0) {
        setFormData(data)
      }

      if (data.photo) {
        setPreviewImage(data.photo)
      }
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handlePhotoInputChange = event => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      photo: file
    });
    setPreviewImage(URL.createObjectURL(file))
  };

  const handlePhoneCreation = (event) => {
    event.preventDefault();
    createPhone(formData)
  }

  const handlePhoneEdit = (event) => {
    event.preventDefault();
    editPhone(formData)
  }

  const handlePopoverTrigger = () => {
    triggerEditPopover()
  }

  return <form class="phone-form">
    <label htmlFor="input-title">Title</label>
    <input
      id="input-title"
      type="text"
      placeholder={defaultPhoneFormData.title}
      name="title"
      value={formData.title}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="input-description">Description</label>
    <textarea
      id="input-description"
      type="text"
      placeholder={defaultPhoneFormData.description}
      name="description"
      value={formData.description}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="input-price">Price</label>
    <input
      id="input-price"
      type="text"
      placeholder={defaultPhoneFormData.price}
      name="price"
      value={formData.price}
      onChange={handleInputChange}
    />

    <label htmlFor="input-color">Color</label>
    <input
      id="input-color"
      type="text"
      placeholder={defaultPhoneFormData.color}
      name="color"
      value={formData.color}
      onChange={handleInputChange}
    />

    <label htmlFor="input-screen">Screen</label>
    <input
      id="input-screen"
      type="text"
      placeholder={defaultPhoneFormData.screen}
      name="screen"
      value={formData.screen}
      onChange={handleInputChange}
    />

    <label htmlFor="input-ram">Ram</label>
    <input
      id="input-ram"
      type="text"
      placeholder={defaultPhoneFormData.ram}
      name="ram"
      value={formData.ram}
      onChange={handleInputChange}
    />

    <label htmlFor="input-manufacturer">Manufacturer</label>
    <input
      id="input-manufacturer"
      type="text"
      placeholder={defaultPhoneFormData.manufacturer}
      name="manufacturer"
      value={formData.manufacturer}
      onChange={handleInputChange}
    />

    <label htmlFor="input-photo">Photo</label>
    {formData.photo && <img src={previewImage} alt="Preview" />}
    <input type="file" name="photo" onChange={handlePhotoInputChange} />

    {(editingActive && (
      <>
        <button className='primary-button' onClick={handlePhoneEdit}>Edit Phone</button>
        <button className='warning-button' onClick={handlePopoverTrigger}>Cancel Edit</button>
      </>
    ))
      ||
      (<>
        <button className='primary-button' onClick={handlePhoneCreation}>Create Phone</button>
      </>
      )}
  </form>
}

export default PhoneForm;
