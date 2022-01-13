import React from 'react';
import PhoneCard from '../Card/PhoneCard'

const PhoneList = ({ phones }) => {
  return (
    <div className="phone-list-container">
      <ul>
        {phones && phones.map((phone) => (
          <li key={phone._id}>
            <PhoneCard phone={phone} expandDisabled width={330}></PhoneCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
