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
import { useState, useEffect } from 'react';
import { fetchNoToken } from '../../Hooks/useFetch';
import { SelectListInput } from '../../Components/Forms/SelectListInput';
import './auth.scss';

export const Register = () => {
  const { error } = useAppSelector((state) => state.auth);
  const [genders, setGenders] = useState([]);
  const [countries, setCountries] = useState([]);
  const dispatch = useAppDispatch();

  const fetchGenders = async () => {
    const req = await fetchNoToken('global/gender', {});
    const { genderList } = await req.json();
    setGenders(genderList);
  };

  const fetchCountries = async () => {
    const req = await fetchNoToken('global/country', {});
    const { countryList } = await req.json();
    setCountries(countryList);
  };
  const handleRegister = (values: any) => {
    dispatch(startRegister(values));
  };
  useEffect(() => {
    fetchCountries();
    fetchGenders();
  }, []);
  return (
    <div className='login-page'>
      <div className='login-container'>
        <button>
          <Switch />
        </button>
        <h1>Register</h1>
        <Formik
          initialValues={initialFormRegister}
          onSubmit={(values) => handleRegister(values)}
          validationSchema={validationRegisterForm}
        >
          {(props) => (
            <Form className='formik-form' noValidate>
              {formRegisterFieldsFirst.map((input) => (
                <TextInput {...input} key={input.name} />
              ))}
              <div className='select'>
                <SelectListInput
                  list={genders}
                  label='Gender'
                  onChange={props.handleChange}
                />
                <SelectListInput
                  list={countries}
                  label='Country'
                  onChange={props.handleChange}
                />
              </div>
              {formRegisterFieldSecond.map((input) => (
                <TextInput {...input} key={input.name} />
              ))}
              <div className='error-auth'>
                <p>{error}</p>
              </div>
              <Link to='/login' className='redirect'>
                Already have an account?
              </Link>
              <button
                data-testid='submit-button'
                type='submit'
                className='submit-form'
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
