import React from "react";
import UserReducerAppContext from "./UserReducerAppContext";
import UserReducerComponentChild2 from "./UserReducerComponentChild2";
import UserReducerComponentChild1 from "./UserReducerComponentChild1";

const UserReducerAppContextMain: React.FC =()=>{
 return(
    <>
    <UserReducerAppContext>
    <div className="div-blocks"> <UserReducerComponentChild1></UserReducerComponentChild1></div>
    <div className="div-blocks"> <UserReducerComponentChild2></UserReducerComponentChild2></div>
    </UserReducerAppContext>
    </>
 )
}

export default UserReducerAppContextMain;