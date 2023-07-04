function Event(){
  
        function handleclick(){
            console.log('button was clicked')
        }
        return(
            <div>
                <h1>Evenet handling</h1>
                <Button onclick={handleclick}>Click me</Button>
            </div>
        )
}
export default Event