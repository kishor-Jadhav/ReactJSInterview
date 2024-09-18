import React, { useContext } from "react";
import { UserContext } from "./UserContextComponent";
import UserContextChild3 from "./UserContextChild3";

const UserContextChild1: React.FC =()=>{
    const {color,setColor} = useContext(UserContext)
    return(<>
    <h2> Child 1</h2>
    <h1 style={{color:color}}> Text for change </h1>
    <div className="--child-block"><UserContextChild3></UserContextChild3></div>
    
    </>)
}
export default UserContextChild1