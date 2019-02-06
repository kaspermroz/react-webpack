import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello world!</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>ADD</button>
    </div>
  );
}

export default App;
