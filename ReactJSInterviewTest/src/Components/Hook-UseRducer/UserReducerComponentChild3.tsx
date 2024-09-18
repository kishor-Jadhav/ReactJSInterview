import React, { useContext } from "react";
import { AppContext } from "./UserReducerAppContext";


const UserReducerComponentChild3: React.FC =()=>{
    const context = useContext(AppContext);

  if (!context) {
    return <div>Error: AppContext not provided.</div>;
  }

  const { state, dispatch } = context;
    return(
        <>
        <h2>Child 3</h2>
            <div>
                <h1>{state.count}</h1>
                <h1>{state.message}</h1>
            </div>
        <div>
            <button onClick={()=>dispatch({type:'INCREMENT'})}> Increment + </button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}> Decrement - </button>
            <button onClick={()=>dispatch({type:'updateMessage', payload :'Welcome from child 3' })}>Update </button>
        </div>
        </>
    )

}

export default UserReducerComponentChild3