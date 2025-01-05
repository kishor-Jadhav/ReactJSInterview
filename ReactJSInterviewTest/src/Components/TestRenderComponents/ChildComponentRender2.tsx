import React, { useEffect } from "react";
import { getTime } from "./testRender";

const ChildComponentRender2:React.FC =()=>{
    useEffect(()=>{
        console.log("Child - 2  UseEffect: ",getTime())
      })
      useEffect(()=>{
          console.log("Child - 2 UseEffect with []: ",getTime())
      },[])
    return<>
    <h2>Child Component 2</h2>
    </>
}

export default ChildComponentRender2