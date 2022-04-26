import { Form, Formik } from 'formik';
import {
  formCreateCommentFields,
  validationCreateCommentForm,
} from '../../constants/formsSchema';
import { useAppDispatch } from '../../Hooks/useRedux';
import { startCreateComment } from '../../Redux/Slices/commentSlice';
import { CreatePost } from '../Buttons/CreatePost';
import { TextInput } from './TextInput';

export const CommentForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const handleCreateComment = ({ comment }: { comment: string }) => {
    dispatch(startCreateComment({ id, comment }));
  };
  return (
    <div className='add-comment'>
      <Formik
        initialValues={{ comment: '' }}
        onSubmit={(comment, { resetForm }) => {
          handleCreateComment(comment);
          resetForm();
        }}
        validationSchema={validationCreateCommentForm}
      >
        {() => (
          <Form className='formik-form' noValidate>
            <TextInput {...formCreateCommentFields} />
            <CreatePost title='Comment' />
          </Form>
        )}
      </Formik>
    </div>
  );
};
