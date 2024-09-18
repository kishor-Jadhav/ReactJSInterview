import React, { useState } from "react";
import UseCallbackComponent2 from "./UseCallbackComponent2";
const UseCallbackComponent1: React.FC =()=>{
    const [toggle,settoggle] = useState<string[]>([]); 
    const [count,setCount] = useState<number>(0); 
    const handleClickParent =()=>{
        console.log("Click to parent");
        setCount((t)=>t+1)
    }
    const handleToggle=()=>{
        setCount((t)=>t+1)
        settoggle((t)=>[...t,'New Item'])
    }
    return(
        <>
        <UseCallbackComponent2 handleClick={handleClickParent} handleToggle = {handleToggle} ></UseCallbackComponent2>
        <div>
            {
                toggle.map((item)=>{
                  return (<div key={Math.random()}>
                  <ul>
                    <li>{item}</li>
                    </ul>                  
                  </div>)
                })
            }
        </div>
        <div>Child Count: {count}</div>
        <button onClick={handleClickParent}> Click Increment</button>
        <div>
        
        </div>
        </>
    )
}

export default UseCallbackComponent1