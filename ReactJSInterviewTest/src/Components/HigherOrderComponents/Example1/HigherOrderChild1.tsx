// src/components/MyComponent.tsx
import React from "react";

// Simple component that displays a message
const HigherOrderChild1: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};

export default HigherOrderChild1;
