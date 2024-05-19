import UserPanel from "./UserPanel";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import UserNotLoggedIn from "./UserNotLoggedIn";

const UserSettings = () => {
  const { addNewUser, resetUser, loggedIn } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    axios
      .get("http://localhost:8000/api/v1/users/me", { headers })
      .then((res) => {
        res.data.status === "success" ? addNewUser(res.data.data) : resetUser();
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  return (
    <div className="settings-container">
      {loggedIn && <UserPanel />}
      {!loggedIn && <UserNotLoggedIn />}
    </div>
  );
};

export default UserSettings;
