import { Link } from "react-router-dom";

export const UserHeader = ({ user, label }: any) => {
  return (
    <div className="contact-item">
      <div className="profile-pic">
        <Link to={`/profile/${user.uid}`}>
          <img src={user.image} alt="profile-pic" />
        </Link>
      </div>
      <div className="profile-info">
        <div className="info">
          <Link to={`/profile/${user.uid}`}>{user.name}</Link>
          <Link to={`/profile/${user.uid}`} className="label">
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
};
