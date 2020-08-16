import React from 'react'
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Thanks/i);
  expect(linkElement).toBeInTheDocument();
});


describe('App', () => {
  it('renders Header', async () => {
    const {getByText} = render(<App/>)
    const headerText = getByText(/Thanks/i)
    expect(headerText).toBeInTheDocument()
  })

  it('renders Home page by default', async() => {
    const {getByText} = render(<App/>)
    const homePageText = getByText(/My Chat Groups/i)
    expect(homePageText).toBeInTheDocument()
  })
})
