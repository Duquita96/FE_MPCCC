import { useState } from "react";
import EmailForm from '../cmpnts-settings-sections/EmailForm'
import GenderForm from '../cmpnts-settings-sections/GenderForm'
import PasswordForm from '../cmpnts-settings-sections/PasswordForm'
import "../../style/userSettings.css";

const UserPanel = ({adminStatus, userData}) => {

  const [modify, setModify] = useState(false);
  const [modifyEmail, setModifyEmail] = useState(false);
  const [modifyGender, setModifyGender] = useState(false);
  const [modifyPass, setModifyPass] = useState(false);
  const [mainBtn, setmainBtn] = useState(true);

  const toggleModify = () => setModify( modify === false? true : false )

  const toggleEmail = () => {setModifyEmail (true); setmainBtn(false);setModify(false);}
  const toggleGender = () => {setModifyGender (true); setmainBtn(false);setModify(false);}
  const togglePass = () => {setModifyPass (true); setmainBtn(false);setModify(false);}

  const cancel = () => {setModifyEmail(false), setModifyGender(false); setModifyPass(false); setmainBtn(true)}
  
  return (
    <>
      <div className="settings-user-info">
        <h3>Your information:</h3>
        <div className="userInfo">
            <div>Name: {(userData.firstName).charAt(0).toUpperCase()+(userData.firstName).slice(1)}</div>
            <div>Surname: {(userData.lastName).charAt(0).toUpperCase()+(userData.lastName).slice(1)} </div>
            {!modify && <div>Email: {userData.email}</div>}
            {modify && <div className="modify" onClick={toggleEmail}>Email: {userData.email}</div>}
            {!modify && <div>Gender: {(userData.gender).charAt(0).toUpperCase()+(userData.gender).slice(1)}</div>}
            {modify && <div className="modify" onClick={toggleGender}>Gender: {(userData.gender).charAt(0).toUpperCase()+(userData.gender).slice(1)}</div>}
            {!modify && <div>Password: ****</div>}
            {modify && <div className="modify" onClick={togglePass}>Password: ****</div>}
            {modifyEmail && <EmailForm cancel={cancel} />}
            {modifyGender && <GenderForm cancel={cancel} />}
            {modifyPass && <PasswordForm cancel={cancel} />}
            
        </div>
        <div className="infoBtns">
          {mainBtn && <button className="modifyBtn pointer" onClick={toggleModify}>
            {modify? "Cancel": "Change info"}</button>}
          {adminStatus && <button className="adminBtn pointer">Go to admin panel</button>}
        </div>
      </div>



      <div className="settings-user-admin">
        <h3>Shipping addresses</h3>
        <button className="addBtn pointer">+</button>
      </div>
      <div className="settings-user-options">
        <h3>Options</h3>
      </div>
      <div className="settings-user-delete">
        <h3>Delete Account</h3>
        <button className="setting-del-btn pointer">Delete</button>
      </div>
      <div className="settings-user-orders">
        <h3>Current orders</h3>
      </div>
      <div className="settings-user-orders">
        <h3>Order History</h3>
      </div>
    </>
  );
};

export default UserPanel;
