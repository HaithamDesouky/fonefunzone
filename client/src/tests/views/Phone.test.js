import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndividualPhone from '../../components/Common/IndividualPhone';

const mockPhone = {
  _id: '61d6e34d7afcea5744837d01',
  title: 'Banana Phone',
  color: 'Yellow',
  creationDate: '2022-01-06T12:40:45.905Z',
  creator: 'Tomato trader',
  description: 'The most Eco friendly phone out there',
  editDate: '2022-01-06T20:32:52.680Z',
  manufacturer: 'Canary Islands',
  photo: null,
  price: '€1 per kilogram',
  ram: '2kb',
  screen: '15cm'
};

describe('Phone view static tests', () => {
  test('Phone is shown after being loaded', () => {
    render(<IndividualPhone phone={mockPhone} />);
    expect(screen.getByText(/Banana Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/Canary Islands/i)).toBeInTheDocument();
  });
});
