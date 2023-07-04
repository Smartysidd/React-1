import { useState } from "react"
function form(){
    const[firstname,setfirstname]=useState('')
    const[lastname,setlastname]=useState('')
    const[pincode,setpincode]=usestate('0')

    function handlefirstnamechange(e){
        // console.log(e)
        setfirstname(e.taget.value)
        
    };
    function handlelastnamechange(e){
        // console.log(e)
        setlastname(e.taget.value)
        
    };

    function handlepincodechange(e){
        console.log(e)
        setpincode(pincode)
    }
    

    function handlesubmit(e){
        e.preventDefault() //object
console.log({fname:firstname,
             lname:lastname,
             pin:pincode}
    )}


    return(
        <div><h1>this is a form</h1>
          <form onsubmit={handlesubmit}>
            <label>firstname</label>
            <label>lastname</label>
            <label>pincode</label>
            <input onChange={handlefirstnamechange} type='text' value={firstname}></input>
            <input onChange={handlelastnamechange} type='text' value={lastname}></input>
            <input onchange={handlepincodechange} type='number' value={pincode}></input>
            <submit>submit form button</submit>
            </form>
            </div>
    )
}
export default Form