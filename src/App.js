import React, { useState, useRef, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function getActiveUserLength(users) {
  return users.filter(user => (user.active)).length;
}

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

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }, [inputs]);

  const userLength = users.length + 1
  const nextId = useRef(userLength);
  
  const onCreate = useCallback(() => {
    nextId.current += 1;

    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);
  
  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id ?
      {...user, active: !user.active}
      : user
    ))
  }, [users]);

  const count = useMemo(() => getActiveUserLength(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
        />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>active: {count}</div>
    </>
  );
}

export default App;
