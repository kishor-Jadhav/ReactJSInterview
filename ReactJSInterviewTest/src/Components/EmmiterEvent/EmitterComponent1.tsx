import React, { useEffect } from "react";
import {dataDmitter, emitter} from "./EmmiterEvent";

const EmitterComponent1:React.FC = ()=>{
    
    const handleInputChange=(event:any)=>{
        emitter.emit('inputData',event.target.value)
    }
    const handleClick =()=>{
        const data = {id:1, data:'Abc'}
        dataDmitter.emit('jdata',data)
    }
    return(
        <>
        <h1>Event Emitter 1</h1>
        <input type="text" placeholder="Type here" onChange={handleInputChange} />
        <button onClick={handleClick}> Click to share</button>
        </>
    )

}

export default EmitterComponent1