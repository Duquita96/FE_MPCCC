import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContextProvider';
import { ToggleSwitch } from '../ToggleSwitch';
import patchFunction from '../../utils/patch';

const UserOptions = () => {
  const { userState, userDispatch } = useContext(UserContext);
  console.log(userState.newsletter);

  const [isNewsletter, setIsNewsletter] = useState(false);
  console.log({ isNewsletter });

  const onChange = async () => {
    if (isNewsletter) alert('You have unbsubscribed from our newsletter');
    else alert('Thanks for subscribing to our newsletter!');

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