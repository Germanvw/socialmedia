import * as Yup from 'yup';

export const initialFormLogin = {
  email: '',
  password: '',
};

export const formLoginFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email...',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '******',
  },
];

export const validationLoginForm = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, 'Minimum 6 characters'),
});
