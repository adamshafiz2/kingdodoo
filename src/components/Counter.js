import { useState } from "react";

function Counter() {
    const [count, setCount]=useState(0)
    return(
        <div className="clients">
            <button onClick={() => setCount(count + 1)}>BOOK NOW</button>
            <div>NUMBER OF CLIENTS:{count} </div>
            <button onClick={() => setCount(count - 1)}>SIGN OUT</button>
        </div>
    )
}
export default Counter;