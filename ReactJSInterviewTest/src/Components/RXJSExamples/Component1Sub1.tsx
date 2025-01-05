
import React from "react"
interface Component1Sub1 {
    titleCom: string;
    name: string;
    children?: any
}
const Component1Sub1: React.FC<Component1Sub1> =({titleCom, name})=>{
return (
    <>
    name : {name}
    title : {titleCom}
    </>
)
}

export default Component1Sub1