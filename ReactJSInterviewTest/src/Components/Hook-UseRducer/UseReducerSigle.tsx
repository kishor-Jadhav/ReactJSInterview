import { useReducer } from "react";
import React  from "react";
 

interface stateInitial{
    count: number;
    message: string | undefined
}
interface Action {
    type: string;
    payload?: string;
  }
const initialState : stateInitial= {
    count: 0 ,
    message:''
}

const reducerFun = (state: stateInitial, action: Action): stateInitial => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count+1};
        case 'DECREMENT':
            return {...state, count: state.count-1} ;
        case 'RESET':
            return {...state, count: 0} ;  
        case 'updateMessage':
            return { ...state, message: action.payload  }  
        default:
            return state         
    }
}

const UseReducerSigle: React.FC =()=>{
    const [state, dispatch] = useReducer(reducerFun,initialState);
return(<>
<div>
    <h1>{state.count}</h1>
    <h1>{state.message}</h1>
</div>
<div>
    <button onClick={()=>dispatch({type:'INCREMENT'})}> Increment + </button>
    <button onClick={()=>dispatch({type:'DECREMENT'})}> Decrement - </button>
    <button onClick={()=>dispatch({type:'updateMessage', payload :'Welcome' })}>Update </button>
</div>
</>)
}

export default UseReducerSigle
