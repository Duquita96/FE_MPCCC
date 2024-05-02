import { useContext, useState } from "react";
import HeaderContext from "../context/HeaderContext";
import "../style/loginStyle.css";


const Login = () => {
  const { toggleLogin, toggleLoginMsg } = useContext(HeaderContext);

  const [signUp, setSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setBirthdate("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  const toggleDisplay = () => {
    setSignUp(signUp === false ? true : false);
    resetFields()
  };

  const changeHandler = (e) => {
    e.target.id === "firstName"
      ? setFirstName(e.target.value)
      : e.target.id === "lastName"
      ? setLastName(e.target.value)
      : e.target.id === "age"
      ? setBirthdate(e.target.value)
      : e.target.id === "email"
      ? setEmail(e.target.value)
      : e.target.id === "pwd"
      ? setPassword(e.target.value)
      : e.target.id === "pwd2"
      ? setPassword2(e.target.value)
      : null;
  };

  const confirmLogin = () => {
    toggleLoginMsg(1)
    setTimeout(() => {toggleLoginMsg(0)}, 3000)
  };

  const rejectLogin = () => {
    toggleLoginMsg(2)
    setTimeout(() => {toggleLoginMsg(0)}, 3000)
  };

  const calcAge = () => {
    const birthday = new Date(birthdate).getTime();
    return Math.floor((Date.now() - birthday) / 31557600000); // 24 * 3600 * 365.25 * 1000
  };



  const signUpFunction = (e) => {
    
    e.preventDefault();
    const age = calcAge();

    if (signUp) {
      if (password !== password2) {
        alert("Your password does not match");
        setPassword("");
        setPassword2("");
        return;
      }

      if (age < 18) {
        alert("You need to be at least 18 to sign up");
        setBirthdate("");
        return;
      }

      fetch("http://localhost:8000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          age,
        }),
      })
        .then((data) => data.json())
        .then((result) => {result.status === "success"? confirmLogin(): rejectLogin()})
        .catch((err) => console.log(err));
    } else {
      // if sign-in
      // add signin POST fetch when backend is available
    }

    resetFields();
    toggleLogin();

  };


  

  return (
    <div className="login-container">
      <form action="" className="login-form" onSubmit={signUpFunction}>
        {signUp ? (
          <input
            className="login-input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="name"
            minLength={2}
            maxLength={30}
            value={firstName}
            onChange={changeHandler}
            required
          />
        ) : null}
        {signUp ? (
          <input
            className="login-input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="surname"
            minLength={2}
            maxLength={30}
            value={lastName}
            onChange={changeHandler}
            required
          />
        ) : null}
        {signUp ? (
          <div className="ageField">
            <p>Please select your date of birth</p>
            <input
              type="date"
              name="age"
              id="age"
              value={birthdate}
              onChange={changeHandler}
              required
            />
          </div>
        ) : null}
        <input
          className="login-input"
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          value={email}
          onChange={changeHandler}
          required
        />
        <input
          className="login-input"
          type="password"
          name="pwd"
          id="pwd"
          placeholder="password"
          value={password}
          onChange={changeHandler}
          required
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
            required
          />
        ) : null}
        {signUp ? (
          <span className="login-terms">
            I have read and accept the{" "}
            <span className="login-links">terms</span>
          </span>
        ) : null}
        {signUp ? (
          <input type="checkbox" name="terms" id="terms" required />
        ) : null}
        <button className="login-btn" type="submit">
          {signUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <p className="login-toggle">
        {signUp ? "Already a user? Click " : "No account? Sign up "}
        <span onClick={toggleDisplay} className="login-links">
          here!
        </span>
      </p>
    </div>
  );
};

export default Login;
