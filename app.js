{/* <div id='parent'>
    <div id='child'>
        <h1 id='greeting1'>'Hello from react heading1</h1>
        <h1 id='greeting2'>'Hello from react heading2</h1>


    </div>
</div> */}

let greeting = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' },[React.createElement('h1', { id: 'Greeting1' },'hello from react'),React.createElement('h1', { id: 'Greeting2' }, 'HELLO FROM GREETING2')]));

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(greeting)