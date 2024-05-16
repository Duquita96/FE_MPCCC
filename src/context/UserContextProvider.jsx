import UserContext from "./UserContext";
import { useReducer } from "react";

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

  const addNewUser = (obj) => {
    userDispatch({type: "newUser",payload: obj});
  };

  const resetUser = () => {
    userDispatch({ type: "noUser" });
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{ userState, userDispatch, addNewUser, resetUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
