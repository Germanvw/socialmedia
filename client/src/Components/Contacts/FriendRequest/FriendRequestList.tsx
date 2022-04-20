import { Link } from "react-router-dom";
import { contactList } from "../../../constants/users";
import { FriendRequestItem } from "./FriendRequestItem";

export const FriendRequestList = () => {
  const showAmount = 3;
  return (
    <div className="friend-request-list">
      <div className="request-title">
        <p className="header">
          Requests
          <span>{contactList ? contactList.length : "0"}</span>
        </p>
      </div>
      {contactList.slice(0, showAmount).map((contact, index) => (
        <FriendRequestItem contact={contact} key={index} />
      ))}
      {contactList.length > showAmount && (
        <Link to="#" className="link-view-all">
          View All
        </Link>
      )}
    </div>
  );
};
