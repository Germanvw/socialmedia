import { useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface PaginationProps {
  perPage: number;
  howMany: number;
  pagination: any;
  handlePagination: (value: number) => void;
  setPagination: (value: any) => void;
}

export const PaginationButtons = ({
  perPage,
  howMany,
  pagination,
  handlePagination,
  setPagination,
}: PaginationProps) => {
  const { index, last, first } = pagination;

  useEffect(() => {
    setPagination({
      ...pagination,
      index: 1,
      last: Math.ceil(howMany / perPage),
    });
  }, [perPage, howMany]);

  return (
    <div className='pagination-btn'>
      <button
        className={`right ${index === first && 'disabled'}`}
        onClick={() => handlePagination(-1)}
      >
        <AiOutlineArrowLeft />
      </button>
      <div className='current'>{index}</div>
      <button
        className={`right ${index === last && 'disabled'}`}
        onClick={() => handlePagination(+1)}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
