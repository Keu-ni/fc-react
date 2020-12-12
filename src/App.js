import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'hongkeun',
        email: '123@123.com',
    },
    {
        id: 2,
        username: 'Keuni',
        email: 'kenui@123.com',
    },
    {
        id: 3,
        username: 'sixshopKeuni',
        email: 'widjai@123.com',
    },
  ];
  const userLength = users.length + 1
  const nextId = useRef(userLength);
  
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
