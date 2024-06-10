import { useState } from "react"

function Counter(){
    const [counter, setCounter] = useState(0)
    const [message, setMessage] = useState("")
    const [input, setInput] = useState("")
    const [enable, setEnable]= useState(false)


    const changeEvent = (value: string)=>{
        setInput(value)
        setEnable(false)
        setMessage("")
        
    }
    const increment = () =>{
        const prasedValue = parseInt(input)
        if(input == "" ){
            setCounter(counter +1)
        }else if(isNaN(prasedValue)){
            setMessage("The input is not a number, please change it.")
        }else if(prasedValue<0){
            setEnable(true)
        }else{
            setCounter(counter+ prasedValue)
        }
    }
    const decrement = ()=>{
        const prasedValue = parseInt(input)
        if(!prasedValue){
            setCounter(counter -1)
        }else if(isNaN(prasedValue)){
            setMessage("The input is not a number, please change it.")
        }else if(prasedValue<0){
            setEnable(true)
        }else{
            setCounter(counter - prasedValue)
        }
    }

    return(

        <div>
            <h3>{counter}</h3>

            <label htmlFor="test"> Enter value:</label>
            <input type="text" id="test" onChange={(event)=>changeEvent(event.target.value)} />
            
            <div>
                <button onClick={increment} disabled={enable} id="increment">Increment</button>
                <button  onClick={decrement} disabled={enable} id="decrement">Decrement</button>
            </div>


            <h2 style={{backgroundColor: 'red'}}>{!message ? "" : message} </h2>
            
        </div>
    )
}

export default Counter;

