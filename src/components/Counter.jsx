import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    return (
    <div style= {{backgroundColor :"pink"}} >
            <h2>Count:  {count}</h2>
            <button onclick = {() => setCount(count +1)}>Increase</button>
            <button onclick = {() => setCount(count -1)}>Decrease</button>
            
        </div>
 



    );
}
export default Counter;