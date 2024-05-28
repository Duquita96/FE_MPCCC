import { UserContext } from '../../context/UserContextProvider.jsx';
import { useState, useContext } from 'react';
import patchFunction from '../../utils/patch';

const GenderForm = ({ cancel }) => {
  const { userDispatch } = useContext(UserContext);
  const [gen, setGen] = useState('');

  const changeGender = e => {
    setGen(e.target.value);
  };

  const patchGender = () => {
    patchFunction({ gender: gen });
    userDispatch({ type: 'gender', gender: gen });
    cancel();
  };

  return (
    <div className='modbox'>
      <select name='genders' id='gender-select' onChange={changeGender}>
        <option value=''>Please select your gender</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='other'>Other</option>
      </select>
      <button className='modifyBtn pointer' onClick={patchGender}>
        Update
      </button>
      <button className='modifyBtn pointer' onClick={cancel}>
        Cancel
      </button>
    </div>
  );
};

export default GenderForm;
