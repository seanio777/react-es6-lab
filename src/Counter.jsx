import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // ES6+ Spread Operator Log
  const stats = { currentCount: count, type: 'Manual' };
  console.log("Counter Stats Update:", { ...stats, timestamp: Date.now() });

  return (
    <div className="section">
      <h3>Counter Component</h3>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;