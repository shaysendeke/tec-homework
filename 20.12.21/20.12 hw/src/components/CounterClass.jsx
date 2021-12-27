import {useState} from "react";

const CounterClass = ()=> {
const [counter, setCounter]= useState(0)


return (
    <div>
        <button onClick={()=> setCounter(counter +1)}>CLICK TO COUNT </button>
        <p>count is: {counter}</p>
    </div>
)
}

export default CounterClass;