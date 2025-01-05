import React from "react";

// Higher-Order Component that logs props
const HigherOrderWrapComponent = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    console.log("Props received by WrappedComponent:", props);
    // Render the wrapped component and pass down the props
    return <WrappedComponent {...props} />;
  };
};

export default HigherOrderWrapComponent;