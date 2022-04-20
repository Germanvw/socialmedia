import { ChatButton } from "../../Buttons/ChatButton";
import { UserHeader } from "../UserHeader";

import "./../contact.scss";

export type TUserProp = {
  uid: string;
  name: string;
  username: string;
  image: string;
  adress: string;
  data: {
    posts: number;
    followers: number;
    following: number;
  };
};
export const ContactItem = ({ contact }: { contact: TUserProp }) => {
  return (
    <div className="contact-item">
      <UserHeader user={contact} label={contact.adress} />
      <ChatButton uid={contact.uid} />
    </div>
  );
};
