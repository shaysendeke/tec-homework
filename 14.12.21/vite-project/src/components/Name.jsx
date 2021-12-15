import React , {useState} from 'react';

const Name = ({userName}) => {
    const [name , setName]= useState(userName);
    const style = {color : name ? 'red' : 'green'}

    return (
        <p onClick={() => setName(!name)} style={style}>
            My Name is {userName}
        </p>
    );
};

export default Name;

// import { useState } from "react";

// const Name = ({randName}) => {
//     const [name, setName] = useState(randName)
//     const style = { color: name ? "red" : "green" }

//     return (
//         < p style={style} onClick={()=>setName(!name)}>
            
//             {randName}
//         </p>
//     )
// }
// export default Name;

