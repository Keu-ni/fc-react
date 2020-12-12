import React from 'react';

function CreateUser(props) {
    const { username, email, onChange, onCreate } = props;

    return(
        <div>
            <input 
                type='text' 
                name='username' 
                placeholder='ID'
                onChange={onChange}
                value={username}
            />
            <input 
                type='email' 
                name='email' 
                placeholder='e-mail'
                onChange={onChange}
                value={email} 
                />
            <button onClick={onCreate}>Submit</button>
        </div>
    )
}

export default CreateUser;