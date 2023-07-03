import React, { useState } from 'react'
function counter(){
    const[count , Setcount]=useState(0)
    return(
        function increment(){
            Setcount(count+1);
        }
        function decrement(){
            Setcount(count-1);
        }
        <div>
<h2>The count value is </h2>
<button onlcick
        </div>
    )
}