import { UserDataProps } from "../../../constants/users";

export const ProfileInfo = ({ userData }: { userData: UserDataProps }) => {
  const { name, adress, image, data } = userData;

  return (
    <div className="profile-info">
      <div className="profile-info-name">
        <img src={image} alt="profile-pic" />
        <p className="username">{name}</p>
        <p className="adress">{adress}</p>
      </div>
      <div className="profile-info-meta">
        <div className="meta-counter">
          <p>{data.posts}</p>
          <p className="label">Posts</p>
        </div>
        <div className="meta-counter">
          <p>{data.followers}</p>
          <p className="label">Followers</p>
        </div>
        <div className="meta-counter">
          <p>{data.following}</p>
          <p className="label">Following</p>
        </div>
      </div>
    </div>
  );
};
