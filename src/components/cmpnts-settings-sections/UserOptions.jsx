import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContextProvider';
import { HeaderContext } from "../../context/HeaderContextProvider.jsx";
import { ToggleSwitch } from '../ToggleSwitch';
import patchFunction from '../../utils/patch';
import axios from 'axios';

const UserOptions = () => {
  const { userDispatch } = useContext(UserContext);
  const [isNewsletter, setIsNewsletter] = useState(false);

  useEffect(() => {
    const headers = { 'x-auth-token': localStorage.getItem('token') };
    axios
      .get('http://localhost:8000/api/v1/users/me/newsletter', { headers })
      .then(res => setIsNewsletter(res.data.data.newsletter));
  }, []);
  console.log({ isNewsletter });

  const { toggleFeedbackMsg } = useContext(HeaderContext);

  /** Displays a confirmation of un/subscribe for 3 seconds */
  const feedbackMsg = (number) => {toggleFeedbackMsg(number); setTimeout(() => {toggleFeedbackMsg(0)}, 3000)}
  // 5 = subscribe - 6 = unsubscribe

  const onChange = async () => {
    if (isNewsletter) feedbackMsg(5);
    else feedbackMsg(6);

    await patchFunction({ newsletter: !isNewsletter }).then(() => {
      userDispatch({ type: 'news', newsletter: !isNewsletter });
      setIsNewsletter(!isNewsletter);
    });
  };

  return (
    <div className='settings-user-options'>
      <h3 className='h3settings'>Options</h3>
      <div className='delBox'>
        <p>Receive newsletter?</p>
        <ToggleSwitch
          label='newsletter'
          onChange={onChange}
          isChecked={isNewsletter}
        />
      </div>
    </div>
  );
};

export default UserOptions;
