import React, { forwardRef, useRef } from "react";

const ForwardRefChild1: React.FC = forwardRef<HTMLInputElement, {}>((props, ref) => {
    
return(
    <>
     <input ref={ref} type="text" name="search" placeholder="Type something here..." />
    
    </>
)
})

export default ForwardRefChild1;