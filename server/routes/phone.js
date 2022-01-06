'use strict';

const express = require('express');
const router = express.Router();
const Phone = require('../models/phone');
const upload = require('./../utils/cloudinary');

router.get('/phone/list', (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.json({ phones });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.get('/phone/:id', (req, res, next) => {
  const { id } = req.params;
  Phone.findById(id)
    .then((phone) => {
      res.json({ phone });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/phone/list', (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.json({ list: phones });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/phone', upload.single('photo'), (req, res, next) => {
  const { title, description, price, manufacturer, ram, screen, color } =
    req.body;

  let url;
  if (req.file) {
    url = req.file.path;
  }
  console.log(req.body, url);
  Phone.create({
    creator: 'DCSL Person',
    title,
    description,
    photo: url,
    price,
    manufacturer,
    ram,
    screen,
    color
  })
    .then((phone) => {
      res.json({ phone: phone });
    })
    .catch((error) => {
      next(error);
    });
});

router.patch('/phone/:id', upload.single('photo'), (req, res, next) => {
  const { id } = req.params;
  const { title, description, price, manufacturer, ram, screen, color } =
    req.body;
  console.log(req.body);

  let url;
  if (req.file) {
    url = req.file.path;
  }
  console.log(title, description);
  Phone.findByIdAndUpdate(
    id,
    { title, description, photo: url, price, manufacturer, ram, screen, color },
    { new: true }
  )
    .then((phone) => {
      res.json({ phone: phone });
    })
    .catch((error) => {
      next(error);
    });
});

router.delete('/phone/:id', (req, res, next) => {
  const { id } = req.params;
  Phone.findByIdAndRemove(id)
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
