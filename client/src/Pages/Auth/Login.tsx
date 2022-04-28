import { Formik, Form } from 'formik';

import { startLogin } from '../../Redux/Slices/authSlice';
import { TextInput } from '../../Components/Forms/TextInput';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import {
  formLoginFields,
  initialFormLogin,
  validationLoginForm,
} from '../../constants/formsSchema';
import { Switch } from '../../Components/Buttons/Switch';
import './auth.scss';

export const Login = () => {
  const { error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className='login-page'>
      <div className='login-container'>
        <button>
          <Switch />
        </button>
        <h1>Login</h1>
        <Formik
          initialValues={initialFormLogin}
          onSubmit={(values) => dispatch(startLogin(values))}
          validationSchema={validationLoginForm}
        >
          {() => (
            <Form className='formik-form' noValidate>
              {formLoginFields.map((input, index) => (
                <TextInput {...input} key={index} />
              ))}
              <Link to='/register' className='redirect'>
                Don't have an account?
              </Link>
              <div className='error-auth'>
                <p>{error}</p>
              </div>
              <button type='submit' className='submit-form'>
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
