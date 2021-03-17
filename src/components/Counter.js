import { useState } from "react";

function Counter() {
    const [count, setCount]=useState(0)
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <div>Count:{count} </div>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </div>
    )
}
export default Counter;