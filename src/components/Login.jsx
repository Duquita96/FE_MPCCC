import { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import HeaderContext from "../context/HeaderContext";
import UserContext from "../context/UserContext";
import "../style/loginStyle.css";

const Login = () => {
  const { toggleLogin, toggleLoginMsg } = useContext(HeaderContext);
  const { addNewUser } = useContext(UserContext);
  const [signUp, setSignUp] = useState(false);

  const emptyForm = {
    firstName: "", 
    lastName: "", 
    birthdate: "", 
    email: "", 
    password: "", 
    password2: ""
  }

  const [form, setForm] = useState(emptyForm);

  /** Handles the changes for the input fields */
  const changeHandler = (e) => {
    const {name, value} = e.target;
    setForm(prevState => ({ ...prevState, [name]: value}));
  }

  /** Resets all the fields in the login form */
  const resetFields = () => {setForm({ ...emptyForm })};

   /** Toggles between sign-in and sign-up + resets fields */
   const toggleDisplay = () => {setSignUp(signUp === false ? true : false); resetFields()};

  /** Displays a confirmation of succesfull log-in for 3 seconds */
  const confirmLogin = () => {toggleLoginMsg(1); setTimeout(() => {toggleLoginMsg(0)}, 3000)}

  /** Displays a message of unsuccesfull log-in for 3 seconds */
  const rejectLogin = () => {toggleLoginMsg(2); setTimeout(() => {toggleLoginMsg(0)}, 3000)};

  /** Calculates the age from the date input field */
  const calcAge = () => {
    const birthday = new Date(form.birthdate).getTime();
    return Math.floor((Date.now() - birthday) / 31557600000); // 24 * 3600 * 365.25 * 1000
  };

  /** Provides frontend validation for form and submits form to the backend */
  const signUpFunction = (e) => {
    e.preventDefault();
    const age = calcAge();

    if (signUp) {
      if (form.password !== form.password2) {
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

      fetch("http://localhost:8000/api/v1/users/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ 
          firstName: form.firstName , 
          lastName: form.lastName, 
          email: form.email, 
          password: form.password, 
          age
        })})

        .then((data) => data.json())
        .then((result) => {
          result.status === "success" ? confirmLogin() : rejectLogin();
          const token = result?.xAuthToken;
          const decodedUserObj = token? jwtDecode(token): null;
          decodedUserObj && localStorage.setItem("token", token);
          decodedUserObj && addNewUser(decodedUserObj);
        })
        .catch((err) => console.log(err));
    } else {
      fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      })
        .then((data) => data.json())
        .then((result) => {
          result.status === "success" ? confirmLogin() : rejectLogin();
          const token = result?.xAuthToken;
          const decodedUserObj = token? jwtDecode(token): null;
          decodedUserObj && localStorage.setItem("token", token);
          decodedUserObj && addNewUser(decodedUserObj);
        })
        .catch((err) => console.log(err));
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
            value={form.firstName}
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
            value={form.lastName}
            onChange={changeHandler}
            required
          />
        ) : null}
        {signUp ? (
          <div className="ageField">
            <p>Please select your date of birth</p>
            <input
              type="date"
              name="birthdate"
              id="age"
              value={form.age}
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
          value={form.email}
          onChange={changeHandler}
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          id="pwd"
          placeholder="password"
          value={form.password}
          onChange={changeHandler}
          required
        />
        {signUp ? (
          <input
            className="login-input"
            type="password"
            name="password2"
            id="pwd2"
            placeholder="repeat password"
            value={form.password2}
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
