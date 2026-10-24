import { useState } from "react";
const User = (props) => {
    const {name} = props;
    const [count,setCount] = useState(0);
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <button onClick={()=>
                setCount(count + 1)
                // setCount((previouscount) => previouscount + 1) we can do like this also 
                }>
                Count Increase
            </button>
            <h2>Name:{name}</h2>
            <h3>Location:</h3>
            <h4>Contact:</h4>
        </div>
    )
 
}

export default User;