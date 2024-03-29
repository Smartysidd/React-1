function Mycomponent2(){
    const name='steeve'
    function showmessage(){
        return(
            <div><h2>hello siddharth</h2></div>
        )
    }
    return(
        <div>
            <h2>
                hello from react {name} {10*20}{showmessage()}
            </h2>
        </div>
    )

}
export default Mycomponent2;
   