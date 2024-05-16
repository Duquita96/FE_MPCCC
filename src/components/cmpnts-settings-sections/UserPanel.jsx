import UserInfo from "./UserInfo";
import DeleteAccount from "./DeleteAccout";
import UserOptions from "./UserOptions";
import UserShipping from "./UserShipping";
import UserOrders from "./UserOrders";
import "../../style/userSettings.css";

const UserPanel = () => {

  return (
    <>
      <UserInfo />
      <UserShipping />
      <UserOptions />
      <DeleteAccount />
      <UserOrders />
    </>
  );
};

export default UserPanel;
