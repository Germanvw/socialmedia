import { ContactItem } from './ContactItem';
import { contactList } from '../../../constants/users';
import { Link } from 'react-router-dom';

export const ContactList = () => {
  const showAmount = 5;
  return (
    <div className='contacts-sidebar'>
      <p className='header'>Contacts</p>
      {contactList.slice(0, showAmount).map((contact) => (
        <ContactItem key={contact.uid} contact={contact} />
      ))}
      {contactList.length > showAmount && (
        <Link to='#' className='link-view-all'>
          View All
        </Link>
      )}
    </div>
  );
};
