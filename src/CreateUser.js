import React, { useContext, useRef } from 'react';
import useInputs from './useInputs';
import { UserDispatch } from './App';

function CreateUser(props) {
    const [form, onChange, reset] = useInputs({
        username: '',
        email: '',
    });
    const { username, email} = form;
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);

    const onCreate = () => {
        dispatch({
        type: 'CREATE_USER',
        user: {
            id: nextId.current,
            username,
            email,
        }
    });
        nextId.current += 1;
        reset();
    };

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

export default React.memo(CreateUser);