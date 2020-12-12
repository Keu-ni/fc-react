import * as React from 'react';

function User(props) {
    const { user, onRemove } = props;
    const { id, username, email} = user;
    return (
        <div>
            <b>{username}</b> <span>{email}</span> 
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    );
}


function UserList(props) {
    const { users, onRemove } = props;
    return (
        <div>
            {
                users.map(user => {
                    return <User 
                        key={user.id} 
                        user={user} 
                        onRemove={onRemove}
                        />
                })
            }
        </div>
    );
}

export default UserList;