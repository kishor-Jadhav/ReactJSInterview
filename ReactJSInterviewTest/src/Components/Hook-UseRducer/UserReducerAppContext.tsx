import React, { createContext, useReducer } from "react";


interface UserReducerAppContext{
    children: any;
}

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
interface AppContextType {
    state: stateInitial;
    dispatch: React.Dispatch<Action>;
  }

export const AppContext = createContext<AppContextType | undefined >(undefined)
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
const UserReducerAppContext : React.FC<UserReducerAppContext> =({children})=>{
    const [state, dispatch] = useReducer(reducerFun,initialState);
return(
    <AppContext.Provider  value={{state, dispatch}}>
          {children}
    </AppContext.Provider>
)
}

export default UserReducerAppContext