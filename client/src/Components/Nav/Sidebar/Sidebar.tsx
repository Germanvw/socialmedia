import { SideMenu } from "./SideMenu";
import { ProfileInfo } from "./ProfileInfo";
import { ContactList } from "../../Contacts/Contact/ContactList";
import { UserDataProps } from "../../../constants/users";
import "./../styles.scss";

export const Sidebar = ({ userData }: { userData: UserDataProps }) => (
  <div className="sidebar">
    <ProfileInfo userData={userData} />
    <SideMenu />
    <ContactList />
  </div>
);
