import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Should have PangPawn title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/PangPawn/i);
  expect(linkElement).toBeInTheDocument();
});
