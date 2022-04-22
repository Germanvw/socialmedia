import { Formik, Form } from 'formik';
import {
  formLoginFields,
  initialFormLogin,
  validationLoginForm,
} from '../../constants/formsSchema';
import { startLogin } from '../../Redux/Slices/authSlice';
import { TextInput } from '../../Components/Forms/TextInput';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import './styles.scss';

export const Login = () => {
  const { error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = (values: any) => {
    dispatch(startLogin(values));
  };
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Login</h1>
        <Formik
          initialValues={initialFormLogin}
          onSubmit={(values) => handleLogin(values)}
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
