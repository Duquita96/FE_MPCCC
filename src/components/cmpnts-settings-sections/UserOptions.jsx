import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContextProvider';
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

  const onChange = async () => {
    await patchFunction({ newsletter: !isNewsletter }).then(() => {
      userDispatch({ type: 'news', newsletter: !isNewsletter });
      setIsNewsletter(!isNewsletter);
    });
  };

  return (
    <div className='settings-user-options'>
      <h3>Options</h3>
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
