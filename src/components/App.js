
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value, setValue] = useState("");

  const input = (e) => {
    let currValue = e.target.value;
    setValue(currValue);
  }

  return (
    <div>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name"  value={value} onChange={input} />
        {value && <p>Hello {value}!</p>}
    </div>
  )
}

export default App
