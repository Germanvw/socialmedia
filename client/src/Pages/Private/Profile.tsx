import { Notificationbar } from "../../Components/Nav/Notificationbar";
import { Sidebar } from "../../Components/Nav/Sidebar/Sidebar";
import { userData } from "../../constants/users";

export const Profile = () => {
  return (
    <div className="main-site">
      <Sidebar userData={userData} />
      <div className="body">profile</div>
      <Notificationbar />
    </div>
  );
};
