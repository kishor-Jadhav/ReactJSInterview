// src/components/UserList.tsx
import React from 'react';

// Component to display a list of users
const HOCUserList: React.FC<{ data: { name: string }[] }> = ({ data }) => {
  return (
    <ul>
      {data.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default HOCUserList;
