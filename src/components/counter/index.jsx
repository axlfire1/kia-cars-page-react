import { useState } from 'react';

const useCounter = (initialValue: number) => {
  const[counter, setCounter] = useState(initialValue);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrement,
    reset
  }
}

function Counter () {
  const counterA = useCounter(1);
  const counterB = useCounter(1);

  return(
    <div>
      <button onClick={counterA.increase}>+</button>
      <button onClick={counterA.decrement}>-</button>
      <div>{counterA.counter}</div>

      
      <button onClick={counterB.increase}>+</button>
      <button onClick={counterB.decrement}>-</button>
      <div>{counterB.counter}</div>
    </div>
  );
}

  
export { Counter };
