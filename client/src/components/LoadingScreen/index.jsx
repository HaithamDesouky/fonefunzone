import React from 'react';
import './index.scss';

export default function index() {
  return (
    <div id="loading-screen">
      <h4>Loading...</h4>
      <div className="fancy-spinner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
