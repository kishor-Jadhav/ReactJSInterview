import React, { useRef } from "react";
import ForwardRefChild1 from "./ForwardRefChild1";
import ForwardRefChild2 from "./ForwardRefChild2";

const ForwardReffMain: React.FC =()=>{
    const inputRef = useRef<HTMLInputElement>(null);
    const childRef = useRef<{ 
        focusInput1: () => void; 
        focusInput2: () => void ;
        changeText1: (text: string) => void;
        changeText2: (text: string) => void;
        changeTextColor: (color: string) => void
    }>(null);
    const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus(); // Focus the input in the child component
        }
      };

      const focusFirstInput = () => {
        if (childRef.current) {
          childRef.current.focusInput1(); // Focus the first input
          childRef.current.changeText1("Hi This is focus 1")
          childRef.current.changeTextColor('red')
        }
      };
    
      const focusSecondInput = () => {
        if (childRef.current) {
          childRef.current.focusInput2(); // Focus the second input
          childRef.current.changeText2("Hi This is focus 2")
          childRef.current.changeTextColor('green')
        }
      };
return(
    <>
    <ForwardRefChild1 ref={inputRef} /// <reference path="componentChild1" />
    ></ForwardRefChild1>
    <button onClick={focusInput}>Focus the Input</button>
    <div>
    <ForwardRefChild2 ref={childRef}></ForwardRefChild2>
    <button onClick={focusFirstInput}>Focus First Input</button>
    <button onClick={focusSecondInput}>Focus Second Input</button>
    </div>    
    </>
)
}

export default ForwardReffMain