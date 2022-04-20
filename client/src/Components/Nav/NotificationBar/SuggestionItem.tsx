import { Link } from "react-router-dom";
import { FriendRequestButton } from "../../Buttons/FriendRequestButton";
import { TUserProp } from "../../Contacts/Contact/ContactItem";
import { UserHeader } from "../../Contacts/UserHeader";

import "../../Contacts/contact.scss";

export const SuggestionItem = ({ contact }: { contact: TUserProp }) => {
  return (
    <div className="contact-item">
      <UserHeader user={contact} label={contact.adress} />
      <FriendRequestButton uid={contact.uid} />
    </div>
  );
};
