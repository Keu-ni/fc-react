import React, { useEffect } from 'react';

const User = React.memo(function User(props) {
    const { user, onRemove, onToggle } = props;
    const { id, username, email, active} = user;

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
                onClick={() => onToggle(id)}
            >
                {username}
            </b>&nbsp;
            <span>{email}</span> 
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    );
});


function UserList(props) {
    const { users, onRemove, onToggle } = props;
    return (
        <div>
            {
                users.map(user => {
                    return <User 
                        key={user.id} 
                        user={user} 
                        onRemove={onRemove}
                        onToggle={onToggle}
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