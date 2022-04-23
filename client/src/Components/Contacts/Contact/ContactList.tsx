import { ContactItem } from './ContactItem';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useRedux';

export const ContactList = () => {
  const { friendList } = useAppSelector((state) => state.friend);
  const showAmount = 5;
  return (
    <div className='contacts-sidebar'>
      <p className='header'>Contacts</p>
      {friendList.length > 0 ? (
        friendList
          .slice(0, showAmount)
          .map(({ user }: any) => <ContactItem key={user.id} user={user} />)
      ) : (
        <></>
      )}
      {friendList.length > showAmount && (
        <Link to='/friends' className='link-view-all'>
          View All
        </Link>
      )}
    </div>
  );
};
