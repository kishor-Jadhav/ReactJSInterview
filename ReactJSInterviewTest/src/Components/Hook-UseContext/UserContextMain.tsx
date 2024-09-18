import React from "react";
import UserContextComponentProvider from "./UserContextComponent";
import UserContextChild1 from "./UserContextChild1";
import UserContextChild2 from "./UserContextChild2";
import  "./UserContext.css"
const UserContextMain:React.FC=()=>{
    return(
        <>
        <UserContextComponentProvider>
             
            <div className="div-blocks"><UserContextChild1></UserContextChild1></div>
            <div className="div-blocks"><UserContextChild2></UserContextChild2></div>
            
        </UserContextComponentProvider>
       </>
    )
}

export default UserContextMain