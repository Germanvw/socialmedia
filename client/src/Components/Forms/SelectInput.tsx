import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
}

export const SelectInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className={`${meta.error && 'has-error'}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component='span' />
    </>
  );
};
