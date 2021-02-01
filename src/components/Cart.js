import React from 'react'

function Cart({cartItems}) {

      const [obj,setObj]=React.useState([]);

      for(item of cartItems){
             
     setObj(obj.concat([{
       

     }]))
    

      }
    

    return (


        <div>
        {cartItems.map((i)=> <div className={"itemContainer"}>        
        <div  className={"item"}>

               <img  src={i}/>
                      

             </div>
         <div   
       
         
         className={"buttons"}>
             <span className={"key"}><img  src={"https://www.flaticon.com/svg/vstatic/svg/709/709484.svg?token=exp=1612110639~hmac=989839d5fcb2571553ca75936934c3bc"}/> </span>
             <span className={"key"}><img  src={"https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1612110936~hmac=e6e61b8b92478ebb381d8ab6e2cc80db"}/> </span>
         
                         </div>    
             </div>

                )
            }   

              </div>
           
    )
      
}

export default Cart
