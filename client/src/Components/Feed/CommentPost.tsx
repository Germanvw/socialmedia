import { Form, Formik } from 'formik';
import {
  formCreateCommentFields,
  validationCreateCommentForm,
} from '../../constants/formsSchema';
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux';
import { startCreateComment } from '../../Redux/Slices/commentSlice';
import { CreatePost } from '../Buttons/CreatePost';
import { TextInput } from '../Forms/TextInput';

export const CommentPost = ({ id }: { id: string }) => {
  const { error } = useAppSelector((state) => state.comment);
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
        {({ resetForm }) => (
          <Form className='formik-form' noValidate>
            <div className='error-auth'>
              <p>{error}</p>
            </div>
            <TextInput {...formCreateCommentFields} />
            <CreatePost title='Comment' />
          </Form>
        )}
      </Formik>
    </div>
  );
};
