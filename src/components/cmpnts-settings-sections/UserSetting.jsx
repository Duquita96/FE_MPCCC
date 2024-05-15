import UserPanel from "./UserPanel";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UserNotLoggedIn from "./UserNotLoggedIn";

const UserSettings = () => {

  const { resetUser } = useContext(UserContext);

  const [loginStatus, setLoginStatus] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(()=> {
    const token = localStorage.getItem("token");
    const headers = {'x-auth-token': token};
    axios.get("http://localhost:8000/api/v1/users/me", {headers})
      .then(res => {
        res.data.status === "success" ? setLoginStatus(true) : resetUser;
        setAdminStatus(res.data?.data.isAdmin === true? true : false )
        setUserData(res.data?.data)
      })
      .catch(err => console.log(err)) 
  }, [])

  return (
    <div className="settings-container">
      {loginStatus && <UserPanel adminStatus={adminStatus} userData={userData} />}
      {!loginStatus && <UserNotLoggedIn />}
    </div>
  );
};

export default UserSettings;
