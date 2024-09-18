import React, { useMemo, useState } from "react";

const UseMemoExample: React.FC = ()=>{
const [count,setCount] = useState<number>(0); 
const [toggle,settoggle] = useState<string[]>([]);    
//const expCal = expensiveCal(count); // Every time it is called when handleToggle called
//Solution =
const expCal = useMemo(()=>expensiveCal(count),[count]);

const handleToggle=()=>{
    settoggle((t)=>[...t,'New Item'])
}
const handleCount=()=>{
    setCount((t)=>t+1)
}
    return(
        <>       
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
        <div>
        expensive Cal : {expCal}
        </div>       
        <div>
        <button onClick={handleToggle}>Handle Toggle</button>
        </div>
        <div>
        <button onClick={handleCount}>Click Count</button>
        </div>
        </>
    )
} 

const expensiveCal=(num: number):number=>{
    console.log("Enter in expensive Calculations")
    for(let i= 0; i<= 10000; i++){
        num=num+1;
    }
    return num;
}

export default UseMemoExample;