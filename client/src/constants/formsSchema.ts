import * as Yup from 'yup';

export const initialFormLogin = {
  email: '',
  password: '',
};

export const initialFormRegister = {
  username: '',
  email: '',
  firstname: '',
  lastname: '',
  age: 16,
  gender: 0,
  country: 0,
  province: '',
  password: '',
  confirmPassword: '',
};

export const formLoginFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];

export const formRegisterFieldsFirst = [
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    label: 'First Name',
    name: 'firstname',
    type: 'text',
    placeholder: 'First Name',
  },
  {
    label: 'Last Name',
    name: 'lastname',
    type: 'text',
    placeholder: 'Last Name',
  },
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    placeholder: 'Age',
  },
];

export const formRegisterFieldSecond = [
  {
    label: 'Province',
    name: 'province',
    type: 'text',
    placeholder: 'Province',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Repeat Pass',
  },
];
export const formCreateCommentFields = {
  label: 'Comment',
  name: 'comment',
  type: 'text',
  placeholder: 'Comment',
};

export const formPostCreateFields = [
  {
    label: 'Post body',
    name: 'text',
    type: 'text',
    placeholder: 'Post body',
  },
  {
    label: 'Image',
    name: 'image',
    type: 'text',
    placeholder: 'URL...',
  },
];

export const validationLoginForm = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(6, 'Minimum 6 characters'),
});

export const validationUserUpdateForm = Yup.object({
  username: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required')
    .max(35, 'Maximum 35 characters'),
  firstname: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters'),
  lastname: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters'),
  gender: Yup.number().min(1, 'Select an option'),
  country: Yup.number().min(1, 'Select an option'),
  province: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters'),
  age: Yup.number()
    .required('Required')
    .min(16, 'Minimum 16 years old')
    .max(120, 'Maximum 120 years old'),
});

export const validationRegisterForm = Yup.object({
  username: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required')
    .max(35, 'Maximum 35 characters'),
  firstname: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters'),
  lastname: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters'),
  gender: Yup.number().min(1, 'Select an option'),
  country: Yup.number().min(1, 'Select an option'),
  province: Yup.string()
    .required('Required')
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters'),
  age: Yup.number()
    .required('Required')
    .min(16, 'Minimum 16 years old')
    .max(120, 'Maximum 120 years old'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Minimum 6 characters')
    .max(25, 'Maximum 25 characters'),
  confirmPassword: Yup.string()
    .required('Required')
    .min(6, 'Minimum 6 characters')
    .max(25, 'Maximum 25 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const validationCreateCommentForm = Yup.object({
  comment: Yup.string()
    .required('Required')
    .min(1, 'Minimum 1 character')
    .max(150, 'Maximum 150 characters'),
});

export const validationCreatePostForm = Yup.object({
  text: Yup.string()
    .required('Required')
    .min(1, 'Minimum 1 character')
    .max(500, 'Maximum 500 characters'),
  image: Yup.string().url('Invalid url').max(256, 'Maximum 256 characters'),
});
