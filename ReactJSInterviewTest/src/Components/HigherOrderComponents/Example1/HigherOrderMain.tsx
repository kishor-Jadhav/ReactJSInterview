import React from "react";

import HigherOrderChild1 from "./HigherOrderChild1";
import HigherOrderWrapComponent from "./HigherOrderWrapComponent";

const MyComponentWithLogging = HigherOrderWrapComponent(HigherOrderChild1);

const HigherOrderMain: React.FC = () => {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      {/* MyComponentWithLogging will log the props and render MyComponent */}
      <MyComponentWithLogging message="Hello, World!" />
    </div>
  );
};

export default HigherOrderMain;