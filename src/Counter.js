import React from 'react';

function Counter() {
    const [number, setNumber] = React.useState(0);

    const onIncrease = () => {
        // 성능 최적화 - 함수형 업데이트
        setNumber(preNumber => preNumber + 1);
    }
    const onDecrease = () => {
        setNumber(preNumber => preNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;