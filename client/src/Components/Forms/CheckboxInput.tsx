import { ErrorMessage, useField } from 'formik';

interface Props {
  label?: string;
  name: string;
  [x: string]: any;
}
export const CheckboxInput = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        {label}
        <input {...field} {...props} type='checkbox' />
      </label>
      <ErrorMessage name={props.name} component='span' />
    </>
  );
};
