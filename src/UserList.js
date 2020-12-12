import * as React from 'react';

function User(props) {
    const { user } = props;
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
}


function UserList(props) {
    const { users } = props;
    return (
        <div>
            {
                users.map(user => {
                    return <User key={user.id} user={user} />
                })
            }
        </div>
    );
}

export default UserList;