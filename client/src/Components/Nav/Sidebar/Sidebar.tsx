import { NavigationSidebar } from "./NavigationSidebar";
import { ProfileInfo } from "./ProfileInfo";
import { ContactList } from "../../Contacts/ContactList";
import "./../styles.scss";
import { UserDataProps } from "../../../constants/users";

export const Sidebar = ({ userData }: { userData: UserDataProps }) => (
  <div className="sidebar">
    <ProfileInfo userData={userData} />
    <NavigationSidebar />
    <ContactList />
  </div>
);
