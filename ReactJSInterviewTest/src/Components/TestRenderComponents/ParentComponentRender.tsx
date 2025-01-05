import React, { useEffect, useState } from "react";
import ChildComponentRender1 from "./ChildComponentRender1";
import ChildComponentRender2 from "./ChildComponentRender2";
import { getTime } from "./testRender";
const ParentComponentRender : React.FC =()=>{
    const [parentState, setParentState] = useState<String>()
    useEffect(()=>{
        console.log("Parent UseEffect with []: " + getTime())
        console.log("Parent UseEffect[] with state: "+ parentState +" "+ getTime()) // This is only call once on render
        setParentState("hi")
    },[])
    useEffect(()=>{
      console.log("Parent UseEffect: "+ getTime())
      //setParentState("hi")  // Here Hi value is fix so call twice 1 on render 2. on set
      // child also refresh
     // setParentState(Math.random().toString()) // it will on call infinite
      console.log("Parent UseEffect with state: "+ parentState +" "+ getTime())
    })

    const handleClick = () =>{
       // setParentState("hi") // nothing will happen
        setParentState("hi-1") // call useEffect and refresh child
        console.log("after click from parent state: " , parentState)
    }

    const handleChildClick =()=>{
        setParentState("hi-2")
    }
    const handleClickchild =()=>{
        console.log("hi from child 1") // No any effect to childs
    }
    return<>
    <h2>Parent Component</h2>
    <ChildComponentRender1 parentState={parentState} handleClickchild ={handleClickchild}></ChildComponentRender1> {/* refresh with 1.Parent UseEffect */}
    <ChildComponentRender2></ChildComponentRender2>
    <div> <button onClick={handleClick}> click from parent</button></div>
    <div> <button onClick={handleChildClick}> click to change prop from child 1</button></div>
    </>
}

export default ParentComponentRender