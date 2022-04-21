import { SideMenu } from './SideMenu';
import { ContactList } from '../../Contacts/Contact/ContactList';
import { SidebarHeader } from './SidebarHeader';
import '../styles.scss';

export function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarHeader />
      <SideMenu />
      <ContactList />
    </div>
  );
}
