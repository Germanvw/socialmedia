export const CreatePost = ({ title }: { title: string }) => {
  return (
    <button className='btn-create-post submit-form margin-left' type='submit'>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 7.33333V24.6667M7.33331 16H24.6666'
          stroke='white'
          strokeWidth='1.2'
        />
      </svg>
      {title}
    </button>
  );
};
