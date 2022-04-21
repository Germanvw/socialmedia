import { useNavigate } from 'react-router-dom';
import './button.scss';

export const ChatButton = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  return (
    <button className='btn-chat' onClick={() => navigate(`/chat/${id}`)}>
      <svg viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.5 14L11.6568 13.5252L11.4388 13.4532L11.2421 13.5716L11.5 14ZM13.5 12L13.0788 11.7305L12.95 11.9319L13.0258 12.1585L13.5 12ZM14.5 14.9908L14.3432 15.4656C14.5229 15.525 14.7206 15.4778 14.8542 15.3437C14.9878 15.2097 15.0342 15.0118 14.9742 14.8323L14.5 14.9908ZM11.2421 13.5716C10.2859 14.1474 8.75657 14.4908 7.5 14.4908V15.4908C8.88543 15.4908 10.6061 15.1218 11.7579 14.4284L11.2421 13.5716ZM7.5 14.4908C3.90983 14.4908 1 11.5825 1 7.99548H0C0 12.1354 3.35817 15.4908 7.5 15.4908V14.4908ZM1 7.99548C1 4.40845 3.90984 1.5 7.5 1.5V0.5C3.35816 0.5 0 3.85556 0 7.99548H1ZM7.5 1.5C11.0902 1.5 14 4.40845 14 7.99548H15C15 3.85556 11.6418 0.5 7.5 0.5V1.5ZM14 7.99548C14 9.32628 13.7043 10.7529 13.0788 11.7305L13.9212 12.2695C14.6857 11.0745 15 9.43686 15 7.99548H14ZM11.3432 14.4748L14.3432 15.4656L14.6568 14.5161L11.6568 13.5252L11.3432 14.4748ZM14.9742 14.8323L13.9742 11.8415L13.0258 12.1585L14.0258 15.1494L14.9742 14.8323Z'
          fill='#4D77FF'
        />
      </svg>
    </button>
  );
};
