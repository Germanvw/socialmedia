import { SideMenu } from './SideMenu';
import { SidebarHeader } from './SidebarHeader';
import { ContactList } from '../../Contacts/Contact/ContactList';
import { UserDataProps } from '../../../constants/users';
import '../styles.scss';

export function Sidebar({ userData }: { userData: UserDataProps }) {
  return (
    <div className='sidebar'>
      <SidebarHeader userData={userData} />
      <SideMenu />
      <ContactList />
    </div>
  );
}
