import React from "react";
import UserReducerComponentChild3 from "./UserReducerComponentChild3";

const UserReducerComponentChild1: React.FC =()=>{
    return(
        <>
        <h2>Child 1</h2>
        <div className="--child-block"> <UserReducerComponentChild3></UserReducerComponentChild3></div>
        </>
    )

}

export default UserReducerComponentChild1