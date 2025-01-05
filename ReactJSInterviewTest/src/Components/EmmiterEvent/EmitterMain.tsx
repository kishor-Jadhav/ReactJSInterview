import React from "react";
import EmitterComponent2 from "./EmitterComponent2";
import EmitterComponent1 from "./EmitterComponent1";

const EmitterMain:React.FC = ()=>{
    return(
        <>
          <EmitterComponent1></EmitterComponent1>
          <EmitterComponent2></EmitterComponent2>
        </>
    )

}

export default EmitterMain