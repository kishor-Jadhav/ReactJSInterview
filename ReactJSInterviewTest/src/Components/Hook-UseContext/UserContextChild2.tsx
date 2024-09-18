import React, { useContext } from "react";
import { UserContext } from "./UserContextComponent";

const UserContextChild2: React.FC =()=>{
    const {color,setColor} = useContext(UserContext)
    const handleClick=()=>{
        setColor('Blue')
    }
    return(<>
    <h2> Child 2</h2>
    <button onClick={handleClick}> Turn to Blue</button>
    </>)
}
export default UserContextChild2