import './App.css';
import Reddit from './components/FetchReddit';
import React, { useState } from 'react';
import Unmount from './components/Unmount';

function App() {
  const [input, setInput] = useState("reactjs");
  const [button, setButton] = useState(true);

  return (
    <div className="App"><br />
      <button onClick={() => setButton(!button)}>Click Here To Unmount</button>
      {button ? <Unmount /> : ""}
      <input onChange={(e) => setInput(e.target.value)} />
      <Reddit URL={input} />
    </div>
  );
}

export default App;
