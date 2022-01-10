import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const renderedApp = render(<App />);

  expect(renderedApp).toMatchSnapshot()
});
