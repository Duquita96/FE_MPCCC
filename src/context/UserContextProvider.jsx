import UserContext from "./UserContext";
import { useReducer } from "react";

const initialState = {};

const userReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.firstName };
    case "lastName":
      return { ...state, lastName: action.lastName };
    case "email":
      return { ...state, email: action.email };
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
    const {firstName, lastName, email, _id, exp} = obj;
    userDispatch({type: "newUser", payload: {firstName, lastName, email, _id, exp}})
  };

  const resetUser = () => {userDispatch({type: "noUser"}); localStorage.clear() }

  return (
    <UserContext.Provider value={{ userState, userDispatch, addNewUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
