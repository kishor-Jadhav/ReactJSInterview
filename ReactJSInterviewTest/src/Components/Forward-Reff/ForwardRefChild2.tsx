import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

const ForwardRefChild2: React.FC = forwardRef((props, ref) => {
    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    const [text1, setText1] = useState("First Input");
    const [text2, setText2] = useState("Second Input");
    const [color, setColor] = useState("black");
     // Exposing multiple refs to the parent using useImperativeHandle
   useImperativeHandle(ref, () => ({
    focusInput1: () => {
      if (inputRef1.current) inputRef1.current.focus();
    },
    focusInput2: () => {
      if (inputRef2.current) inputRef2.current.focus();
    },
    changeText1: (newText: string) => {
        setText1(newText);
        if (inputRef1.current) {
          inputRef1.current.value = newText; // Update the input value directly
        }
      },
    changeText2: (newText: string) => {
        setText2(newText);
        if (inputRef2.current) {
          inputRef2.current.value = newText; // Update the input value directly
        }
      },
    changeTextColor: (color:string) => {
        setColor(color)
      },
    }));
return(
    <>    
     <input ref={inputRef1} value={text1} type="text" placeholder="First Input" />
     <input ref={inputRef2} value={text2} type="text" placeholder="Second Input" />
     <h1 style={{color:color}}> Text Color Change</h1>
    </>
)
})

export default ForwardRefChild2;