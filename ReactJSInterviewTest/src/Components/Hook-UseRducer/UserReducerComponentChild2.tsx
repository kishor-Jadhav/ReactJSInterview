import React, { useContext } from "react";
import { AppContext } from "./UserReducerAppContext";

const UserReducerComponentChild2: React.FC =()=>{
    const context = useContext(AppContext);

    if (!context) {
      return <div>Error: AppContext not provided.</div>;
    }
  
    const { state, dispatch } = context;
    return(
        <>
        <h2>Child 2</h2>
        <div>
                <h1>{state.count}</h1>
                <h1>{state.message}</h1>
        </div>
        <button onClick={()=>dispatch({type:'updateMessage', payload :'Welcome from child 2' })}>Update </button>
        </>
    )

}

export default UserReducerComponentChild2