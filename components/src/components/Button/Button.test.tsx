import Button from '@components/Button/Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

const BUTTON_TEXT = 'Click me';
const onClickMock = jest.fn();

describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button onClick={onClickMock}>{BUTTON_TEXT}</Button>);

    const buttonElement = screen.getByText(BUTTON_TEXT);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', async () => {
    render(<Button onClick={onClickMock}>{BUTTON_TEXT}</Button>);
    const buttonElement = screen.getByText(BUTTON_TEXT);

    await userEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
