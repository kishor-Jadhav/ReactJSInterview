import React, { useEffect, useState } from "react";
import { getTime } from "./testRender";

const ChildComponentRender1:React.FC <any>=React.memo(({parentState,handleClickchild})=>{ // avoid rerender from parent till props not change
    const [childState, setChildState] = useState<String>()
    useEffect(()=>{
        console.log("Child - 1  UseEffect: ",getTime())
        console.log("Child - 1 Parent UseEffect  in child 1 with state: "+ parentState +" "+ getTime())
        console.log("Child - 1  UseEffect with state: "+ childState +" "+ getTime())
      })
      useEffect(()=>{
          console.log("Child - 1 UseEffect with []: ",getTime())
          console.log("Child - 1 Parent UseEffect[]  in child 1 with state: "+ parentState +" "+ getTime())
          console.log("Child - 1  UseEffect[] with state: "+ childState +" "+ getTime())
      },[])

    //   const handleClickchild =()=>{
    //     setChildState("hi child1") //Not any effect to parent
    //   }
    return<>
    <h2>Child Component 1</h2>
    Props parentState from Paren : {parentState}
    <div> <button onClick={handleClickchild}> click from child 1</button></div>
    </>
})

export default ChildComponentRender1