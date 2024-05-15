const EmailForm = ({cancel}) => {
  return (
    <div className="modbox">
      <input
        type="email"
        placeholder="new email"
        className="formInput"
        name="newmail"
      />
      <input
        type="email"
        placeholder="confirm new email"
        className="formInput"
        name="newmail2"
      />
      <button className="modifyBtn pointer">Update</button>
      <button className="modifyBtn pointer" onClick={cancel}>Cancel</button>
    </div>
  );
};

export default EmailForm;
