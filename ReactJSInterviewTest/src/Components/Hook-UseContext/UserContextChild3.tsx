import React, { useContext } from "react";
import { UserContext } from "./UserContextComponent";

const UserContextChild3: React.FC =()=>{
    const {color,setColor} = useContext(UserContext)
    const handleClick=()=>{
        setColor('green')
    }
    return(<>
    <h2> Child 3</h2>
    <button onClick={handleClick}> Turn to Green</button>
    </>)
}
export default UserContextChild3