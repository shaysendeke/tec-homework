import {useEffect, useState} from "react";

const Unmount = ()=> {
    useEffect(() => {
        console.log("useEffect is called");
        return () => console.log("unmount function is being called");
      });
    
      return <div>Unmount component</div>;
    

}

export default Unmount;