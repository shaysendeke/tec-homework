import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Unmount from "./components/Unmount";

function App() {
  const [initialCount, setInitialCount] = useState(0);
  const [unmount, setUnmount] = useState(true)
  
  return (
    <div className="App">
      <label>Counter starts at:  </label> <br />
      <input
        type="number"
        defaultValue={initialCount}
        onChange={(evt) => {
          setInitialCount(Number(evt.target.value));
        }}
      />
      <br /><br />
      <Counter initialCount={initialCount} />
      <CounterClass/>
      <Unmount ></Unmount>
      <button onClick={()=> setUnmout(unmount)}></button> 
      {setUnmount? <Unmount></Unmount> : ""}
      
    </div>
  );
}

export default App;
