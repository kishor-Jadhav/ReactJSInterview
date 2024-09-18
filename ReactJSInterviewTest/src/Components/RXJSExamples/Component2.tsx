import React  from "react";
import { upateSharedDataOb } from "../Services/commonService";

const Component2 : React.FC =()=>{
    const handleUpdate = ()=>{
        const data =  {name:'XYZ'};
        upateSharedDataOb(data);
    }
    return(
        <>
        <div>
                <h1>Component 2 </h1>
        </div>
        <div>
            <button onClick={handleUpdate} > On click update Observable</button>
        </div>
        </>
    )
}

export default Component2