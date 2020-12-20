import React, { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const initialState = {
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id 
            ? { ...user, active: !user.active }
            : user
          )
      }
    case 'REMOVE_USER': 
      return {
        ...state,
        users: state.users.filter(user => 
          user.id !== action.id
          )
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  function getActiveUserLength(users) {
    return users.filter(user => (user.active)).length;
  }

  const count = useMemo(() => getActiveUserLength(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>active: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
