import React, { createContext, useState } from "react";
interface AppClassContextType {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
}
export const AppClassContext = createContext<{
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);
 

const FunctionComponent : React.FC<{children : any}> =({children})=>{
    const [color, setColor] = useState('black');
    return(
        <>
        <AppClassContext.Provider value={{color, setColor}} >
        {children}
        </AppClassContext.Provider>
        </>
    )
}

export default FunctionComponent