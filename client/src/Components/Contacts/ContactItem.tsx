import { Link } from "react-router-dom";
import { ChatButton } from "../Buttons/ChatButton";
import "./contact.scss";

type TUserProp = {
  uid: string;
  name: string;
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
    <Link to={`/profile/${contact.uid}`}>
      <div className="contact-item">
        <div className="profile-pic">
          <img src={contact.image} alt="profile-pic" />
        </div>
        <div className="profile-info">
          <div className="info">
            <p>{contact.name}</p>
            <p className="label">{contact.adress}</p>
          </div>
          <ChatButton />
        </div>
      </div>
    </Link>
  );
};
