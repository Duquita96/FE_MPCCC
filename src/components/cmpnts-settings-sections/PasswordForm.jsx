const PasswordForm = ({cancel}) => {
    return (
        <div className="modbox">
          <input
            type="password"
            placeholder="current password"
            className="formInput"
            name="oldpwd"
          />
          <input
            type="password"
            placeholder="new password"
            className="formInput"
            name="newpwd"
          />
          <input
            type="password"
            placeholder="confirm new password"
            className="formInput"
            name="newpwd2"
          />
          <button className="modifyBtn pointer">Update</button>
          <button className="modifyBtn pointer" onClick={cancel}>Cancel</button>
        </div>
      );
}

export default PasswordForm;