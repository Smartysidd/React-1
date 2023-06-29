{/* <div id='parent'>
    <div id='child'>
        <h1 id='content'>"hello from React"</h1>
</div>
</div> */}





let greeting = React.createElement('div', { id: 'parent' }, React.creatElement('div', { id:'child' }, React.createElement('h1', { id: "content" }), 'Hello from react'));

console.log(greeting)

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(greeting)