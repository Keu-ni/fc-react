import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User(props) {
    const { user } = props;
    const { id, username, email, active} = user;
    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        // console.log('미리 설정 됨', user);
        return () => {
            // console.log('user 값이 바뀌기 전', user);
        }
    }, [user]);
    return (
        <div>
            <b style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => dispatch({
                    type: 'TOGGLE_USER',
                    id
                })}
            >
                {username}
            </b>&nbsp;
            <span>{email}</span> 
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>Delete</button>
        </div>
    );
});


function UserList(props) {
    const { users } = props;
    return (
        <div>
            {
                users.map(user => {
                    return <User 
                        key={user.id} 
                        user={user} 
                        
                        />
                })
            }
        </div>
    );
}

export default React.memo(
        UserList, 
        (prevProps, nextProps) => prevProps.users === nextProps.users
    );