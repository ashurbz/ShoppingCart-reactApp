import React from 'react'
import Order from './Order'

function Cart({cartItems}) {
    
        let arr=[];
        for(let item of cartItems){
        
        arr.push({
              product:item,
              qty:1
       
            })
           
       
             }
             
            
let [obj,setObj]=React.useState(arr);
const [order,setOrder]=React.useState(false);

     
    
//    React.useEffect(() => {
//      inCart();
//     }, [])
    
const increase = (i)=>{
    obj[i].qty++;

    let arr1=new Array();

for(let i of obj){
    arr1.push(i)
}




    setObj(arr1)
    console.log("ashhbs")
}


const decrease =(i)=>{
    if(obj[i].qty >0){
     obj[i].qty--;

    let arr1=new Array();

for(let i of obj){
    arr1.push(i)
}




    setObj(arr1)
  
}

}
    

    
      

    
    

    return (


        <div>
       {order&&<Order items={obj} setOrder={setOrder}/>}     
    <div  className={"placeOrder"}> <button onClick={()=>{
        setOrder(true);
    }}> Place Order </button> </div>
        {obj.map((i,index)=> <div className={"itemContainer"}>        
        <div  className={"item"}>

               <img  src={i.product}/>
                      

             </div>
         <div   
       
         
         className={"buttons"}>
             <span onClick={()=>increase(index)}  className={"key"}><img  src={"https://www.flaticon.com/svg/vstatic/svg/709/709484.svg?token=exp=1612110639~hmac=989839d5fcb2571553ca75936934c3bc"}/> </span>
             <span> {i.qty} </span>
             <span onClick={()=>decrease(index)} className={"key"}><img  src={"https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1612110936~hmac=e6e61b8b92478ebb381d8ab6e2cc80db"}/> </span>
         
                         </div>    
             </div>

                )
            }   



              </div>
           
    )
      
}

export default Cart
