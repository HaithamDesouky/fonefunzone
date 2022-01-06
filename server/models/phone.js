'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 140
    },
    description: {
      type: String,
      trim: true,
      maxlength: 5000
    },
    creator: {
      type: String,
      ref: 'User',
      required: true
    },
    photo: {
      type: String
    },
    manufacturer: {
      type: String
    },
    price: {
      type: String
    },
    screen: {
      type: String
    },
    ram: {
      type: String
    },
    color: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'editDate'
    }
  }
);

const Phone = mongoose.model('Phone', schema);

module.exports = Phone;
