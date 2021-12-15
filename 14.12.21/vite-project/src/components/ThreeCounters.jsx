import React, { useState } from "react";

const ThreeCounters = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  

  return (
    <div>
        <button onClick={()=> setCounter1(counter1 +1)}>counter 1</button>
      <p>counter 1 : {counter1}</p><br></br>
      <button onClick={()=> setCounter2(counter2 +1)}>counter 1</button>
      <p>counter 2 : {counter2}</p><br></br>
      <button onClick={()=> setCounter3(counter3 +1)}>counter 1</button>
      <p>counter 3 : {counter3}</p><br></br>
    </div>
  );
};

export default ThreeCounters;