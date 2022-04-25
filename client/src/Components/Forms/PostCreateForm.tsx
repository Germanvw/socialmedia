import { Form, Formik } from 'formik';
import {
  formPostCreateFields,
  validationCreatePostForm,
} from '../../constants/formsSchema';
import { useAppDispatch } from '../../Hooks/useRedux';
import { startPostCreate } from '../../Redux/Slices/postSlice';
import { CreatePost } from '../Buttons/CreatePost';
import { TextInput } from './TextInput';

export const PostCreateForm = ({ setOpen }: any) => {
  const dispatch = useAppDispatch();

  const handleCreateComment = (text: string, image: string) => {
    dispatch(startPostCreate({ text, image }));
  };
  return (
    <div className='add-comment'>
      <Formik
        initialValues={{ text: '', image: '' }}
        onSubmit={({ text, image }, { resetForm }) => {
          handleCreateComment(text, image);
          resetForm();
          setOpen(false);
        }}
        validationSchema={validationCreatePostForm}
      >
        {() => (
          <Form className='formik-form' noValidate>
            {formPostCreateFields.map((item, index) => (
              <TextInput key={index} {...item} />
            ))}
            <CreatePost title='Create Post' />
          </Form>
        )}
      </Formik>
    </div>
  );
};
