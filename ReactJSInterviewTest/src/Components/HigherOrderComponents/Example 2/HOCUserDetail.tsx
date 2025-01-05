// src/components/UserDetail.tsx
import React from 'react';

// Component to display user details
const HOCUserDetail: React.FC<{ data: { name: string; email: string } }> = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default HOCUserDetail;
