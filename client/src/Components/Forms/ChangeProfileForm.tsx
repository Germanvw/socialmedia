import {
  formRegisterFieldsFirst,
  validationUserUpdateForm,
} from '../../constants/formsSchema';
import { SelectListInput } from './SelectListInput';
import { TextInput } from './TextInput';
import { Formik, Form } from 'formik';
import { fetchNoToken } from '../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { CreatePost } from '../Buttons/CreatePost';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import { startUserUpdate, authActions } from '../../Redux/Slices/authSlice';

export const ChangeProfileForm = ({ setOpen }: any) => {
  const { user, error } = useAppSelector((state) => state.auth);
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

  useEffect(() => {
    fetchCountries();
    fetchGenders();
  }, []);
  if (!user) return <></>;
  return (
    <Formik
      initialValues={{
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
        gender: user.gender.id,
        country: user.country.id,
        province: user.province,
      }}
      onSubmit={(values) => {
        dispatch(startUserUpdate(values));
      }}
      validationSchema={validationUserUpdateForm}
    >
      {(props): any => (
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

          <TextInput
            name='province'
            type='text'
            placeholder='Province'
            label='Province'
          />
          <p className='error'>{error}</p>
          <CreatePost title='Change' svg={false} />
        </Form>
      )}
    </Formik>
  );
};
