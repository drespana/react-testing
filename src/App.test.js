/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, queryByTestId } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  render(<App/>)
  
  // TODO: change the expect to actually test something 😉
  expect(screen.findByRole('button')).toBeTruthy();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  render(<App/>)
  fireEvent.click(screen.getByText('Current theme: light', {selector:'button'}))

  // TODO: change the expect to actually test something 😉
  expect(screen.findByRole('button', {selector:'Current theme: dark'})).toBeTruthy();
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  render(<App/>)
  fireEvent.click(screen.getByText('Current theme: light', {selector:'button'}))
  // TODO: change the expect to actually test something 😉
  expect(queryByTestId(document.body.style.color)).toBe('rgb(51, 51, 51)');
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', async () => {
  // TODO: change the expect to actually test something 😉
  render(<App/>)
  fireEvent.click(screen.getByText('Show hidden content', {selector:'button'}))

  expect(screen.getByText('this content is hidden by default')).toBeTruthy();
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
