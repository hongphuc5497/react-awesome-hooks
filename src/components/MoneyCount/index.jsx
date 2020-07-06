import React, { useState } from 'react';
import usePrevious from '../../hooks/usePrevious';

const MoneyCount = () => {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);

  return (
    <div>
      <p>Current: {value} - Previous: {lastValue}</p>
      <button onClick={() => setValue(value + 1)}>Increment Money</button>
    </div>
  )
}

export default MoneyCount;