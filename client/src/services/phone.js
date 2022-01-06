import api from './api';

export const listPhones = () =>
  api.get('/phone/list').then(response => response.data.phones);

export const loadPhone = id =>
  api.get(`/phone/${id}`).then(response => response.data.phone);

export const phoneList = () => {
  return api.get('/phone/list').then(response => response.data.list);
};

export const phoneCreate = data => {
  const formBody = new window.FormData();
  formBody.append('title', data.title);
  formBody.append('description', data.description);
  formBody.append('photo', data.photo || '');
  formBody.append('price', data.price || '');
  formBody.append('manufacturer', data.manufacturer || '');
  formBody.append('ram', data.ram || '');
  formBody.append('screen', data.screen || '');
  formBody.append('color', data.color || '');
  return api.post('/phone', formBody).then(response => response.data);
};

export const phoneEdit = (id, data) => {
  const formBody = new window.FormData();
  formBody.append('title', data.title);
  formBody.append('description', data.description);
  formBody.append('photo', data.photo || '');
  formBody.append('price', data.price || '');
  formBody.append('manufacturer', data.manufacturer || '');
  formBody.append('ram', data.ram || '');
  formBody.append('screen', data.screen || '');
  formBody.append('color', data.color || '');
  return api
    .patch(`/phone/${id}`, formBody)
    .then(response => response.data.phone);
};

export const phoneDelete = id => {
  return api.delete(`/phone/${id}`);
};
