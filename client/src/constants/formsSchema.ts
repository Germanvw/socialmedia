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

export const formRegisterFields = [];

export const formCreateCommentFields = {
  label: 'Comment',
  name: 'comment',
  type: 'text',
  placeholder: 'Comment...',
};

export const validationLoginForm = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, 'Minimum 6 characters'),
});

export const validationRegisterForm = Yup.object({});

export const validationCreateCommentForm = Yup.object({
  comment: Yup.string()
    .required('Required')
    .min(1, 'Minimum 1 character')
    .max(150, 'Maximum 150 characters'),
});
