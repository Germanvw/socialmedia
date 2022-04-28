import { Register } from '../Pages/Auth/Register';
import { render, screen } from './configTest';

test('Register form should be rendered', () => {
  render(<Register />);
  const username = screen.getByPlaceholderText(/Username/i);
  const email = screen.getByPlaceholderText(/Email/i);
  const firstname = screen.getByPlaceholderText(/First Name/i);
  const lastname = screen.getByPlaceholderText(/Last Name/i);
  const age = screen.getByPlaceholderText(/Age/i);
  const gender = screen.getByLabelText(/Gender/i);
  const country = screen.getByLabelText(/Country/i);
  const province = screen.getByPlaceholderText(/Province/i);
  const password = screen.getByPlaceholderText(/Password/i);
  const confirmPassword = screen.getByPlaceholderText(/Repeat Pass/i);
  const submitButton = screen.getByTestId('submit-button');
  expect(username).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(firstname).toBeInTheDocument();
  expect(lastname).toBeInTheDocument();
  expect(age).toBeInTheDocument();
  expect(gender).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(province).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
