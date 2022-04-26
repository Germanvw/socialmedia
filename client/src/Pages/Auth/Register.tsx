import { Formik, Form } from 'formik';

import { startRegister } from '../../Redux/Slices/authSlice';
import { TextInput } from '../../Components/Forms/TextInput';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import {
  formRegisterFieldsFirst,
  formRegisterFieldSecond,
  initialFormRegister,
  validationRegisterForm,
} from '../../constants/formsSchema';
import { Switch } from '../../Components/Buttons/Switch';
import './auth.scss';

export const Register = () => {
  const { darkTheme } = useAppSelector((state) => state.ui);
  const { error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleRegister = (values: any) => {
    dispatch(startRegister(values));
  };
  return (
    <div className='login-page'>
      <div className='login-container'>
        <button>
          <Switch darkTheme={darkTheme} />
        </button>
        <h1>Register</h1>
        <Formik
          initialValues={initialFormRegister}
          onSubmit={(values) => handleRegister(values)}
          validationSchema={validationRegisterForm}
        >
          {() => (
            <Form className='formik-form' noValidate>
              {formRegisterFieldsFirst.map((input) => (
                <TextInput {...input} key={input.name} />
              ))}
              <div className='divided'>
                {/* <TextInput />
                <SelectInput /> */}
              </div>
              {formRegisterFieldSecond.map((input) => (
                <TextInput {...input} key={input.name} />
              ))}

              <Link to='/login' className='redirect'>
                Already have an account?
              </Link>
              <div className='error-auth'>
                <p>{error}</p>
              </div>
              <button type='submit' className='submit-form'>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
