import React from 'react';
import HOCWithDataFetching from './HOCWithDataFetching';
import HOCUserList from './HOCUserList';
import HOCUserDetail from './HOCUserDetail';
// Define fetch functions
const fetchUserList = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());
  };
  
  const fetchUserDetail = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json());
  };
  
  // Enhance components with data fetching
  const UserListWithData = HOCWithDataFetching(HOCUserList, fetchUserList);
  const UserDetailWithData = HOCWithDataFetching(HOCUserDetail, fetchUserDetail);
  
  const HOCMain: React.FC = () => {
    return (
      <div>
        <h1>User List</h1>
        <UserListWithData />
        <h1>User Detail</h1>
        <UserDetailWithData />
      </div>
    );
  };
  
  export default HOCMain;