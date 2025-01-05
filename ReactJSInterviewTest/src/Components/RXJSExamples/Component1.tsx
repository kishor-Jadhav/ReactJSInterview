import React, { useEffect, useState } from "react"
import { getsharedObservable } from "../Services/commonService";
import Component1Sub1 from "./Component1Sub1";
import { Subscription } from "rxjs";

const Component1 : React.FC= ()=>{
    const [data,setdata]= useState<any>();
    const allSubscription = new Subscription();
    useEffect(()=>{
    const sharedObservable$ = getsharedObservable();

    const subscription = sharedObservable$.subscribe({
        next:(res) => {
          console.log(res)
          setdata(res)
        }
    })
    allSubscription.add(subscription)
    return()=>{
     console.log("cleanup")
     allSubscription.unsubscribe();
    }
    },[])

  return(
    <>
    <div>
        <h1>Component 1</h1>
        <div>Data :{data?.name}</div>
        {JSON.stringify(data)}
    </div>
    <div>
        <Component1Sub1 titleCom = "Title 1" name="name 1" > </Component1Sub1>
    </div>
    </>
  )
}

export default Component1;