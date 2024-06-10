import { useState, useEffect } from "react"



function Timer(){
    const [count, setCount] = useState(1)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((sec) => sec + 1);
        }, 1000)
    
        const stopTimer = () => clearInterval(timer);
    
        return stopTimer;
    },[count])
      
    const resetTimer = () => {
        setCount(1)
      }

    return(

    <div>
        <h1>{count}</h1>

        <button onClick={resetTimer}>Reset</button>
    </div>

    )
}
export default Timer;
