import React,{useContext, createContext, useState} from "react";
interface UserContext{
    children:any;
}
export const UserContext = createContext<any>(null);

const UserContextComponentProvider:React.FC<UserContext> =({children})=>{
    const [color,setColor] = useState('Red')
  return(<>
  <UserContext.Provider value={{color,setColor}}>
   {children}
  </UserContext.Provider>
  </>)
}

export default UserContextComponentProvider