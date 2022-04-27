import { Field, useField } from 'formik';

interface Props {
  label: string;
  list: any[];
  onChange: any;
  [x: string]: any;
}

export const SelectListInput = ({ list, label, onChange }: Props) => {
  const lowerCaseLabel = label.toLocaleLowerCase();
  const [field, meta] = useField(lowerCaseLabel);
  return (
    <>
      <label htmlFor={lowerCaseLabel}>{label}</label>
      <div className='select-body'>
        <Field
          as='select'
          className='select-item'
          id={lowerCaseLabel}
          onChange={onChange}
          name={lowerCaseLabel}
        >
          <option value={0}>Select</option>
          {list.map((item: any) => (
            <option value={parseInt(item.id)} key={item.id}>
              {item.name}
            </option>
          ))}
        </Field>
        <div className='svg'>
          {meta.touched && meta.error && (
            <svg
              width='17'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z'
                fill='#e41d1d'
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};
