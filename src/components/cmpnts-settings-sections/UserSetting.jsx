import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";



const UserSettings = () => {

  const [loginStatus, setLoginStatus] = useState(true);
  const [adminStatus, setAdminStatus] = useState(false);

  useEffect(()=> {
    // get user by id
    // set loginstatus
    // set is admin or not
    // log user out if token is not valid anymore
  }, [])

  return (
    <div className="settings-container">
      {loginStatus && <UserInfo />}
    </div>
  );
};

export default UserSettings;
