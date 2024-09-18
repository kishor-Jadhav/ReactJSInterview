import React from "react";
interface UseCallbackComponent {
    handleClick: any;
    count?:number;
    handleToggle: any
}
const UseCallbackComponent2: React.FC<UseCallbackComponent> =({handleClick, handleToggle})=>{
    return(
        <>
        
       
        <button onClick={handleToggle}>Handle Toggle</button>
        </>
    )
}

export default UseCallbackComponent2