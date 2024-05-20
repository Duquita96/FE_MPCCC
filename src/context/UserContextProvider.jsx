import UserContext from "./UserContext";
import { useReducer, useState } from "react";

const initialState = {};

const userReducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.email };
    case "firstName":
      return { ...state, firstName: action.firstName };
    case "gender":
      return { ...state, gender: action.gender };
    case "home":
      return { ...state, homeAddress: action.homeAddress };
    case "lastName":
      return { ...state, lastName: action.lastName };
    case "news":
      return { ...state, newsLetter: action.newsLetter };
    case "orders":
      return { ...state, orders: action.orders };
    case "shipping":
      return { ...state, shippingAddress: action.shippingAddress };
    case "_id":
      return { ...state, id: action._id };
    case "newUser":
      return { ...state, ...action.payload };
    case "noUser":
      return { initialState };
    default:
      return state;
  }
};



/** Provides information about the logged in user to the entire app */
const UserContextProvider = ({ children }) => {

  const [userState, userDispatch] = useReducer(userReducer, initialState);
  const [loggedIn, setLoggedIn] = useState(false);

  const loginON = () => {setLoggedIn(true)};
  const loginOFF = () => {setLoggedIn(false)};

  const addNewUser = (obj) => {
    userDispatch({type: "newUser",payload: obj});
    loginON()
  };

  const resetUser = () => {
    userDispatch({ type: "noUser" });
    loginOFF();
    localStorage.clear();
  };

  

  return (
    <UserContext.Provider
      value={{ userState, userDispatch, addNewUser, resetUser, loggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
