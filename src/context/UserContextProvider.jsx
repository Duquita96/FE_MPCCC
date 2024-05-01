import UserContext from "./UserContext";
import { useState } from "react";

/** Provides information about the logged in user to the entire app */
const UserContextProvider = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState({});

    return(
        <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;