const GenderForm = ({cancel}) => {
  return (
    <div className="modbox">
      <select name="genders" id="gender-select" >
        <option value="">Please select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button className="modifyBtn pointer">Update</button>
      <button className="modifyBtn pointer" onClick={cancel}>Cancel</button>
    </div>
  );
};

export default GenderForm;
