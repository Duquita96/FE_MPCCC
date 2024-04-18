import { useState } from "react";
import "../style/loginStyle.css";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [terms, setTerms] = useState(false);

  const toggleDisplay = () => {
    setSignUp(signUp === false ? true : false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPassword2("");
    setTerms(false);
  };

  const changeHandler = (e) => {
    e.target.id === "firstName"
      ? setFirstName(e.target.value)
      : e.target.id === "lastName"
      ? setLastName(e.target.value)
      : e.target.id === "email"
      ? setEmail(e.target.value)
      : e.target.id === "pwd"
      ? setPassword(e.target.value)
      : e.target.id === "pwd2"
      ? setPassword2(e.target.value)
      : e.target.id === "terms"
      ? setTerms(e.target.value)
      : null;
  };

  return (
    <div className="login-container">
      <form action="" className="login-form">
        {signUp ? (
          <input
            className="login-input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="name"
            value={firstName}
            onChange={changeHandler}
          />
        ) : null}
        {signUp ? (
          <input
            className="login-input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="surname"
            value={lastName}
            onChange={changeHandler}
          />
        ) : null}
        <input
          className="login-input"
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          value={email}
          onChange={changeHandler}
        />
        <input
          className="login-input"
          type="password"
          name="pwd"
          id="pwd"
          placeholder="password"
          value={password}
          onChange={changeHandler}
        />
        {signUp ? (
          <input
            className="login-input"
            type="password"
            name="pwd"
            id="pwd2"
            placeholder="repeat password"
            value={password2}
            onChange={changeHandler}
          />
        ) : null}
        {signUp ? (
          <span className="login-terms">
            I have read and accept the{" "}
            <span className="login-links">terms</span>
          </span>
        ) : null}
        {signUp ? (
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={terms}
            onChange={changeHandler}
          />
        ) : null}
        <button className="login-btn" type="submit">
          {signUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <p className="login-toggle">
        {signUp ? "Already a user? Click " : "No account? Sign up "}
        <span onClick={toggleDisplay} className="login-links">here!</span>
      </p>
    </div>
  );
};

export default Login;
