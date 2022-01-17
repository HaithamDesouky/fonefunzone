import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Phone Component static tests', () => {
  test('Phone is shown after being loaded', () => {
    render(<IndividualPhone phone={mockPhone} />);
    expect(screen.getByText(/Banana Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/Canary Islands/i)).toBeInTheDocument();
  });

  test('Error message should show if phone is no phone prop passed', () => {
    render(<IndividualPhone />);
    expect(
      screen.getByText(/Sorry there has been a problem loading your phone/i)
    ).toBeInTheDocument();
  });
});

describe('Phone interactivity tests', () => {
  test('Delete function should be called upon delete button click', () => {
    const handleDelete = jest.fn();
    render(<IndividualPhone phone={mockPhone} handleDelete={handleDelete} />);
    const deleteButton = screen.getByRole('button', { name: /delete phone/i });
    expect(deleteButton).toBeVisible();
    userEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalled();
  });
  test('Edit function should be called upon edit button click', () => {
    const triggerEditPopover = jest.fn();
    render(
      <IndividualPhone
        phone={mockPhone}
        triggerEditPopover={triggerEditPopover}
      />
    );
    const editButton = screen.getByRole('button', { name: /edit phone/i });
    expect(editButton).toBeVisible();
    userEvent.click(editButton);
    expect(triggerEditPopover).toHaveBeenCalled();
  });
});
