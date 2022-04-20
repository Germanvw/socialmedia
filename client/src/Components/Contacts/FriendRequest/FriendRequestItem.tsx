import { TUserProp } from "../Contact/ContactItem";
import { UserHeader } from "../UserHeader";

import "./styles.scss";

export const FriendRequestItem = ({ contact }: { contact: TUserProp }) => {
  const handleAcceptFriendRequet = () => {
    console.log("accept");
  };
  const handleDeclineFriendRequest = () => {
    console.log("decline");
  };
  return (
    <div className="friend-request-item">
      <UserHeader user={contact} label="Friend Request Recived" />
      <div className="buttons">
        <button className="btn-text-blue" onClick={handleAcceptFriendRequet}>
          Accept
        </button>
        <button className="btn-text-grey" onClick={handleDeclineFriendRequest}>
          Decline
        </button>
      </div>
    </div>
  );
};
