import { Notificationbar } from "../Components/Nav/Notificationbar";
import { Sidebar } from "../Components/Nav/Sidebar/Sidebar";
import { userData } from "../constants/users";

import "./homepage.scss";

export const Homepage = () => {
  return (
    <div className="main-site">
      <Sidebar userData={userData} />
      <div className="body">asd</div>
      <Notificationbar />
    </div>
  );
};
