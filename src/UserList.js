import React, { useEffect } from 'react';

function User(props) {
    const { user, onRemove, onToggle } = props;
    const { id, username, email, active} = user;

    useEffect(() => {
        // 컴포넌트가 마운트 될 때
        // ex) props -> state
        // REST API or library
        // setTimeout ...
        console.log('Component render!');
        return () => {

            // 언마운트 될 때
            // clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('Component Delete!');
        }
    }, []);
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