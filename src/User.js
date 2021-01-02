import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.data;
}

function User({ id }) {
  const {
    data: user,
    error,
    isLoading
  } = useAsync({
      promiseFn: getUser,
      id,
      // id 값이 변하면 다시 호출한다. 이전이랑 똑같음.
      watch: id,
  });

  if (isLoading) return <div>로딩 중 ... </div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        Email: <b> {user.email}</b>
      </p>
    </div>
  );
}

export default User;
