import React , {useState} from 'react';

const MyName = () => {
    const [name , setname]= useState(false);
    const style = {color : name ? 'red' : 'green'}

    return (
        <p onClick={() => setname(!name)} style={style}>
            My Name is Shay
        </p>
    );
};

export default MyName;
