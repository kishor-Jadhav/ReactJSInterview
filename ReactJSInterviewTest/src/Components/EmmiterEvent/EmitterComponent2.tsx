import React, { useEffect, useState } from "react";
import {dataDmitter, emitter} from "./EmmiterEvent";

const EmitterComponent2:React.FC = ()=>{
    const [data,setData] =useState()
    const [jData,setJdata] =useState()
    useEffect(()=>{
        const handleShareData = (data:any)=>{
            setData(data)
        }
        const handleShareJdata = (data:any)=>{
            setJdata(data)
        }
        emitter.on('inputData',handleShareData)
        dataDmitter.on('jdata',handleShareJdata)
        return()=>{
            emitter.off
        }
    },[])
    return(
        <>
        <h1>Event Emitter 2</h1>
        Data :{data}

        JData:{JSON.stringify(jData)}
        </>
    )

}

export default EmitterComponent2