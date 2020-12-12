import * as React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name='Hello' color='red' />
      <Hello color='green' />
    </Wrapper>
  );
}

export default App;
