
import { useState } from "react"




function Counter(){
    const[count,setCount]=useState(0)

    function increment(){
        setCount(count+1);
    }
function decrement(){
    if(count==0){
    setcount(count);
    }
    
    else{
        setCount(count-1);
    }

}
    return(
        <div>
            <h2>The count value is </h2>

            <button onclick={increment}>increment</button>
            <button onclick={decrement}>decrement</button>

        </div>
    )
}
export default Counter