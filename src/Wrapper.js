import React from 'react';

function Wrapper({ children }) {
    const style = {
        border: '1px solid green',
        padding: 16
    }

    return <div style={style}>{children}</div>
}

export default Wrapper;