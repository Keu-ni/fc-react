import React, { useReducer, useRef, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import useInputs from "./useInputs";
import Users from "./Users";

const initialState = {
  // inputs: {
  //   username: '',
  //   email: '',
  // },
  users: [
    {
      id: 1,
      username: "hongkeun",
      email: "123@123.com",
      active: true,
    },
    {
      id: 2,
      username: "Keuni",
      email: "kenui@123.com",
      active: false,
    },
    {
      id: 3,
      username: "sixshopKeuni",
      email: "widjai@123.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value,
    //     }
    //   }
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const { users } = state;
  const nextId = useRef(initialState.users.length + 1);
  // const { username, email } = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value,
  //   })
  // }, [])

  const onCreate = useCallback(
    (e) => {
      dispatch({
        type: "CREATE_USER",
        user: {
          id: nextId.current,
          username,
          email,
        },
      });
      nextId.current += 1;
      reset();
    },
    [username, email, reset]
  );

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  function getActiveUserLength(users) {
    return users.filter((user) => user.active).length;
  }

  const count = useMemo(() => getActiveUserLength(users), [users]);

  return (
    <>
      <Users />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>active: {count}</div>
    </>
  );
}

export default App;
