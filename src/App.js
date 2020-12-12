import React, { useState, useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'hongkeun',
        email: '123@123.com',
        active: true,
    },
    {
        id: 2,
        username: 'Keuni',
        email: 'kenui@123.com',
        active: false,
    },
    {
        id: 3,
        username: 'sixshopKeuni',
        email: 'widjai@123.com',
        active: false,
    },
  ]);

  const [ inputs, setInputs ] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const userLength = users.length + 1
  const nextId = useRef(userLength);
  
  const onCreate = () => {
    nextId.current += 1;

    const user = {
      id: nextId.current,
      username,
      email,
    }

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }
  
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id ?
      {...user, active: !user.active}
      : user
    ))
  }

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
        />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
