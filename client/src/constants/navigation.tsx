import { IoHomeOutline, IoChatboxOutline } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';

export const navigationOptions = [
  {
    name: 'Home',
    link: '/',
    icon: <IoHomeOutline />,
  },
  {
    name: 'Navigate',
    link: '/users',
    icon: <AiOutlineSearch />,
  },
  {
    name: 'Profile',
    link: '/user/',
    icon: <CgProfile />,
  },
  {
    name: 'Favorites',
    link: '/favorites',
    icon: (
      <svg viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M11.5 15L11.1252 15.4685C11.3053 15.6126 11.552 15.6407 11.7599 15.5408C11.9678 15.4409 12.1 15.2307 12.1 15H11.5ZM11.5 1.00001H12.1V0.400011L11.5 0.400011L11.5 1.00001ZM1.5 1L1.5 0.4L0.9 0.399999V1H1.5ZM1.5 15H0.9C0.9 15.2307 1.03221 15.4409 1.24009 15.5408C1.44797 15.6407 1.69471 15.6126 1.87482 15.4685L1.5 15ZM6.5 11L6.87482 10.5315C6.65569 10.3562 6.34431 10.3562 6.12518 10.5315L6.5 11ZM12.1 15V1.00001H10.9V15H12.1ZM0.9 1V15H2.1V1H0.9ZM1.87482 15.4685L6.87482 11.4685L6.12518 10.5315L1.12518 14.5315L1.87482 15.4685ZM6.12518 11.4685L11.1252 15.4685L11.8748 14.5315L6.87482 10.5315L6.12518 11.4685ZM11.5 0.400011L1.5 0.4L1.5 1.6L11.5 1.60001L11.5 0.400011Z'
          fill='#a5a3a9'
        />
      </svg>
    ),
  },
  {
    name: 'Edit Profile',
    link: '/profile',
    icon: <ImProfile />,
  },
  {
    name: 'Chat',
    link: '/chat',
    icon: <IoChatboxOutline />,
  },
];
