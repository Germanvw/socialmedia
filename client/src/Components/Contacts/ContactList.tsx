import { ContactItem } from "./ContactItem";
import { contactList } from "../../constants/users";
import { Link } from "react-router-dom";

export const ContactList = () => {
  return (
    <div className="contacts-sidebar">
      <p className="header">Contacts</p>
      {contactList.slice(0, 5).map((contact) => (
        <ContactItem key={contact.uid} contact={contact} />
      ))}
      <Link to="#">View All</Link>
    </div>
  );
};
