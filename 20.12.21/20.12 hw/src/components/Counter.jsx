import { useEffect, useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICK</button><br></br>
      <p>count  IS: {count}</p>
    </div>
  );
};

export default Counter;
