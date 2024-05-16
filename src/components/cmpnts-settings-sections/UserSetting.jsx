import UserPanel from "./UserPanel";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UserNotLoggedIn from "./UserNotLoggedIn";

const UserSettings = () => {
  const { addNewUser, resetUser } = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    axios
      .get("http://localhost:8000/api/v1/users/me", { headers })
      .then((res) => {
        res.data.status === "success" ? setLoginStatus(true) : resetUser;
        addNewUser(res.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="settings-container">
      {loginStatus && <UserPanel />}
      {!loginStatus && <UserNotLoggedIn />}
    </div>
  );
};

export default UserSettings;
