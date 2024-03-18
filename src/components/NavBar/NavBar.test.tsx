import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  test('renders project name and dark mode toggle switch', () => {
    render(
      <BrowserRouter>
        <NavBar projectName="Test Project" />
      </BrowserRouter>
    );

    const projectNameElement = screen.getAllByText(/Test Project/i);
    expect(projectNameElement[1]).toBeInTheDocument();

    const toggleDarkModeSwitch = screen.getByTestId('toggle-dark-mode');
    expect(toggleDarkModeSwitch).toBeInTheDocument();
  });

});
