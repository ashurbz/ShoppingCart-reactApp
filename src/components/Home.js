import React from 'react'
import {items} from "./utility"
import { Route, Switch, Redirect,useHistory } from "react-router-dom";

function Home({setCartItems,cartItems}) {

  
    const history=useHistory();

    React.useEffect(() => {
      history.push("/")
    
    },[])
  
         

    console.log(cartItems)
    
    function addToCart(i){
         
           if(!cartItems.includes(i))
          setCartItems(cartItems.concat([i]))
        

    }


    return (
        <div className={"itemsContainer"}>
          
          <div className={"items"}>
            {
                items.map((i)=>
        <div className={"itemContainer"}>        
        <div  className={"item"}>

               <img  src={i}/>
                      

             </div>
         <button   
         onClick={
           ()=>{
             addToCart(i)
           }
         }
         
         className={"button"}>
             {/* <span className={"key"}><img  src={"https://www.flaticon.com/svg/vstatic/svg/709/709484.svg?token=exp=1612110639~hmac=989839d5fcb2571553ca75936934c3bc"}/> </span>
             <span className={"key"}><img  src={"https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1612110936~hmac=e6e61b8b92478ebb381d8ab6e2cc80db"}/> </span> */}
            Add to Cart
                         </button>    
             </div>

                )
            }   

              </div>
           

        </div>
    )
}

export default Home
