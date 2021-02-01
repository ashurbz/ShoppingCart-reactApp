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
