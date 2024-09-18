import React, { useEffect, useRef, useState } from 'react';

const SimplePrevValueExample: React.FC = () => {
  const [inputVal, setInputVal] = useState(''); // State to store the current value
  const [inputCount, setInputCount] = useState(0); // State to count changes
  const prevVal = useRef(''); // Ref to store the previous value

  // Update the previous value before the component re-renders with a new value
  useEffect(() => {
    prevVal.current = inputVal; // Store current input value in ref (previous value)
  }, [inputVal]); // Runs whenever inputVal changes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value); // Update input value when typing
    setInputCount((c) => c + 1); // Increment the input change counter
  };

  return (
    <div>
      <h3>Simple Previous Value Example with Input Count</h3>
      
      {/* Input field to change current value */}
      <input
        type="text"
        value={inputVal}
        onChange={handleInputChange} // Call the combined handler
        placeholder="Type something..."
      />

      <div>
        {/* Display the current value */}
        <p>Current Value: {inputVal}</p>
        
        {/* Display the previous value */}
        <p>Previous Value: {prevVal.current}</p>

        {/* Display how many times the input has changed */}
        <p>Input Count: {inputCount}</p>
      </div>
    </div>
  );
};

export default SimplePrevValueExample;
