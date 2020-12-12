import * as React from 'react';

const users = [
    {
        id: 1,
        username: 'hongkeun',
        email: '123@123.com',
    },
    {
        id: 2,
        username: 'Keuni',
        email: 'kenui@123.com',
    },
    {
        id: 3,
        username: 'sixshopKeuni',
        email: 'widjai@123.com',
    },
];

function User(props) {
    const { user } = props;
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
}


function UserList() {
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