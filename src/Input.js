import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInput] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        const nextInputs = {
            ...inputs,
            [name]: value,
        }
        
        setInput(nextInputs);
    }

    const onReset = () => {
        setInput({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    }
    return (
        <div>
            <input name='name' placeholder='name' onChange={onChange} value={name} ref={nameInput} />
            <input name='nickname' placeholder='nick name' onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>value </b>
                {name}: ({nickname})
            </div>
        </div>
    )
}

export default InputSample;