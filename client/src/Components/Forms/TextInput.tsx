import { useField } from 'formik';
import { useAppSelector } from '../../Hooks/useRedux';

import './styles.scss';

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
  showError?: boolean;
}

export const TextInput = ({ label, showError, ...props }: Props) => {
  const { darkTheme } = useAppSelector((state) => state.ui);
  const [field, meta] = useField(props);
  return (
    <>
      <div
        className={`input-global text-input-${darkTheme ? 'dark' : 'light'}`}
      >
        <div className={`input`}>
          <input
            className={`${meta.error && 'has-error'}`}
            {...field}
            {...props}
            placeholder={props.placeholder}
          />
        </div>
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
      <div className='error-text'>{showError && <p>{meta.error}</p>}</div>
    </>
  );
};
