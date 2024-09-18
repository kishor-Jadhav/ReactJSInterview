import React, { useEffect, useRef, useState } from "react";
import SimplePrevValueExample from "./SimplePrevValueExample";

const UseReffComponent: React.FC = () => {
  const [inputval, setInputval] = useState("");
  const preval = useRef(""); // Ref to store the previous value
  const [inputcount, setinputcount] = useState(0);
  const inputvalRff = useRef<HTMLInputElement | null>(null);

  const inputRff = useRef<HTMLInputElement | null>(null);
  const dateRff = useRef<HTMLInputElement>(null);
  const selectreff = useRef<HTMLSelectElement | null>(null);

  const count = useRef(0);

  // This effect will run on every render to increment the count
  useEffect(() => {
    count.current = count.current + 1;
    // setinputcount((c)=> c+1) // Uncommenting this will cause infinite loop
  });

  // Effect to update preval (previous value) before inputval changes
  useEffect(() => {
    console.log(inputvalRff)
    preval.current = inputval; // Update previous value before re-render
    setinputcount((c) => c + 1); // Increment count whenever inputval changes
  }, [inputval]);

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    console.log(`input: ${inputRff.current?.value}`);
    console.log(`date: ${dateRff.current?.value}`);
    console.log(`selectreff:  ${selectreff.current?.value}`);
  };

  return (
    <>
      {/* Display current value and prev value */}
      <div>
        <label>Count Check</label>
        <input
          type="text"
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
          ref={inputvalRff}
        />
        <div>
          Ref Count: {count.current}
          <br />
          useSate Count: {inputcount}
        </div>
        <div>
          -----------------------------------
          <br />
          {/* Current value of inputval */}
          Current Val: {inputval}
          <br />
          {/* Previous value stored in preval */}
          Prev Val: {preval.current}
        </div>
      </div>

      {/* Form for Name, Date, and Select elements */}
      <form style={{ margin: 10, padding: 10 }} onSubmit={handleOnsubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" ref={inputRff} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" name="dtp" ref={dateRff} />
        </div>
        <div>
          <select name="drop" ref={selectreff}>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
        <div>
          <button type="submit">On Submit</button>
        </div>
      </form>

      <div>
        <h1>Simple PrevValue Example</h1>
      <SimplePrevValueExample></SimplePrevValueExample>
      </div>
    </>
  );
};

export default UseReffComponent;
