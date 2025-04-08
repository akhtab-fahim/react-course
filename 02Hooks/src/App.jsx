import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2 className='bg-purple-700'>Value: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  );
}

export default App;
