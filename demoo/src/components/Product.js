function Product(){
    // let Product = ['laptop','mouse','keyboard','mobile']
    let productlist=[{id:1, name:'laptop', price:35000},
    {id:2, name:'mouse', price:30000},
    {id:3, name:'keyboard', price:40000},
    {id:4, name:'mobile', price:45000},];
    return(
        // <div>
        //     {
        //         products.map((product,index)=>{
        //             return<li key={index}>{product}</li>
        //         })
        //     }
        // </div>
    <div>
        {
            productList.map((product)=>(
                     <li key={product.id}>{product.name}:{product.price}</li>
            ))
            }
            </div>
    );
        }
    

export default Product;