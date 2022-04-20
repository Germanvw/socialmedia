import { CreatePost } from "../Components/Buttons/CreatePost";
import { FeedList } from "../Components/Feed/FeedList";
import { NotificationBar } from "../Components/Nav/NotificationBar/NotificationBar";
import { SearchUser } from "../Components/Nav/SearchUser";
import { Sidebar } from "../Components/Nav/Sidebar/Sidebar";
import { userData } from "../constants/users";

import "./homepage.scss";

export const Homepage = () => {
  return (
    <div className="main-site">
      <Sidebar userData={userData} />
      <div className="body">
        <div className="header">
          <SearchUser />
          <div className="btn">
            <CreatePost />
          </div>
        </div>
        <FeedList />
      </div>
      <NotificationBar />
    </div>
  );
};
