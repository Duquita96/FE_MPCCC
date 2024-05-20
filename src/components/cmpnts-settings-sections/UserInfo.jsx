import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import EmailForm from '../cmpnts-settings-sections/EmailForm'
import GenderForm from '../cmpnts-settings-sections/GenderForm'
import PasswordForm from '../cmpnts-settings-sections/PasswordForm'


const UserInfo = () => {

    const { userState } = useContext(UserContext);

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
    <div className="settings-user-info">
      <h3>Your information:</h3>
      <div className="userInfo">
        <div>
          Name: 
          {" " + userState.firstName.charAt(0).toUpperCase() +
            userState?.firstName.slice(1)}
        </div>
        <div>
          Surname:
          {" " + userState.lastName.charAt(0).toUpperCase() +
            userState.lastName.slice(1)}
        </div>
        {!modify && <div>Email: {userState.email}</div>}
        {modify && (
          <div className="modify" onClick={toggleEmail}>
            Email: {userState.email}
          </div>
        )}
        {!modify && (
          <div>
            Gender:
            {" " + userState.gender?.charAt(0).toUpperCase() +
              userState.gender?.slice(1)}
          </div>
        )}
        {modify && (
          <div className="modify" onClick={toggleGender}>
            Gender:
            {userState.gender?.charAt(0).toUpperCase() +
              userState.gender?.slice(1)}
          </div>
        )}
        {!modify && <div>Password: ****</div>}
        {modify && (
          <div className="modify" onClick={togglePass}>
            Password: ****
          </div>
        )}
        {modifyEmail && <EmailForm cancel={cancel} />}
        {modifyGender && <GenderForm cancel={cancel} />}
        {modifyPass && <PasswordForm cancel={cancel} />}
      </div>
      <div className="infoBtns">
        {mainBtn && (
          <button className="modifyBtn pointer" onClick={toggleModify}>
            {modify ? "Cancel" : "Change info"}
          </button>
        )}
        {userState.isAdmin && (
          <button className="adminBtn pointer">Go to admin panel</button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
