import { Login } from '../Pages/Auth/Login';
import { fireEvent, render, screen } from './configTest';

test('Login form should be rendered', () => {
  render(<Login />);
  const email = screen.getByPlaceholderText(/Email/i);
  const password = screen.getByPlaceholderText(/Password/i);
  const submitButton = screen.getByText(/Sign In/i);
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Login inputs should change', () => {
  render(<Login />);
  const user = {
    email: 'user@mail.com',
    password: '123456',
  };
  const emailInput = screen.getByPlaceholderText(/Email/i) as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    /Password/i
  ) as HTMLInputElement;
  fireEvent.change(emailInput, { target: { value: user.email } });
  fireEvent.change(passwordInput, { target: { value: user.password } });
  expect(emailInput.value).toBe(user.email);
  expect(passwordInput.value).toBe(user.password);
});

// test('Login with invalid User', async () => {
//   render(<Login />);

//   const user = {
//     email: 'user1111@mail.com',
//     password: 'XXXXXX',
//   };
//   const emailInput = screen.getByPlaceholderText(/Email/i) as HTMLInputElement;
//   const passwordInput = screen.getByPlaceholderText(
//     /Password/i
//   ) as HTMLInputElement;
//   const submitButton = screen.getByText(/Sign In/i);
//   fireEvent.change(emailInput, { target: { value: user.email } });
//   fireEvent.change(passwordInput, { target: { value: user.password } });
//   fireEvent.click(submitButton);
//   const error = await screen.findByText(/No user found./i);
// });

// test('Login with invalid password', async () => {
//   render(<Login />);

//   const user = {
//     email: 'user@mail.com',
//     password: '123455',
//   };
//   const emailInput = screen.getByPlaceholderText(/Email/i) as HTMLInputElement;
//   const passwordInput = screen.getByPlaceholderText(
//     /Password/i
//   ) as HTMLInputElement;
//   const submitButton = screen.getByText(/Sign In/i);
//   fireEvent.change(emailInput, { target: { value: user.email } });
//   fireEvent.change(passwordInput, { target: { value: user.password } });
//   fireEvent.click(submitButton);
//   const error = await screen.findByText(/Invalid Password/i);
// });

// test('Login with valid credentials', async () => {
//   render(<Login />);

//   const user = {
//     email: 'user@mail.com',
//     password: '123455',
//   };
//   const emailInput = screen.getByPlaceholderText(/Email/i) as HTMLInputElement;
//   const passwordInput = screen.getByPlaceholderText(
//     /Password/i
//   ) as HTMLInputElement;
//   const submitButton = screen.getByText(/Sign In/i);
//   fireEvent.change(emailInput, { target: { value: user.email } });
//   fireEvent.change(passwordInput, { target: { value: user.password } });
//   fireEvent.click(submitButton);
//   const;
//   const postTitle = await screen.findByText(/Posts/i);
// });
