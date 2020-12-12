import * as React from 'react';

function Hello({ name, color }) {
return <div style={{color}}>{name}</div>;
}

Hello.defaultProps = {
    name: '이름 없슴'
}

export default Hello;