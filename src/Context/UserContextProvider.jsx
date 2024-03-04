import React, { useState } from "react";
import UserContext from "../Context/UserContext";

const UserContextProvider=({children})=>{
    const [searchQuery ,setsearchQuery]=useState("");
    return(
        <UserContext.Provider value={{searchQuery, setsearchQuery}}>
            {children}
        </UserContext.Provider>
    )}
 export default UserContextProvider ;