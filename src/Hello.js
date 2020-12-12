import * as React from 'react';

function Hello({ name, color, isSpecial }) {
return (
    <div style={{color}}>
        {isSpecial && <b>*</b>}
        {name}
    </div>
    );
}

Hello.defaultProps = {
    name: '이름 없슴'
}

export default Hello;