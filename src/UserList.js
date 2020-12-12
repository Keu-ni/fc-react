import * as React from 'react';

function User(props) {
    const { user, onRemove, onToggle } = props;
    const { id, username, email, active} = user;
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
}


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

export default UserList;