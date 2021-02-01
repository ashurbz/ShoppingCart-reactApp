import React from "react";
import SignUp from "./components/signUp/index.js";
import Login from "./components/login/index.js";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Cart from "./components/Cart";
import "./main.css";

import { Route, Switch, Redirect,useHistory } from "react-router-dom";



const Routes = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cartItems,setCartItems]=React.useState([]);
  const history=useHistory();

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  function logout() {
    // localStorage.clear();
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
    history.push("/login")
    // setLoggedIn(false;
  }

  return (
    <div>
      <div className={"header"}>
        {" "}
        <div style={{ textAlign: "center" }}> Shopping Home </div>{" "}
        <div>

          {loggedIn&&<span >
              <img onClick={
                ()=>{
                  history.push("cart");
                }
              } className="logo" src="https://www.flaticon.com/svg/vstatic/svg/609/609496.svg?token=exp=1612157871~hmac=aa2e2fae6bee0e539e1e59224f0734c3" />
              </span>

          }
          
          {loggedIn && 
           
              
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right" }}
              onClick={logout}
            >
              Logout
            </Button>
           
          }


        </div>
      </div>
      <div className={"body"}>
        {" "}
        <Switch>
        
          {loggedIn && <Route path="/cart">
                     
                     <Cart cartItems={cartItems}/>
            </Route>
            }
           

              {loggedIn && <Route path="/" >
            <Home cartItems={cartItems} setCartItems={setCartItems}/>
            </Route>
            }

          {!loggedIn && (
            <Route exact path="/signUp" name="Sign Up" component={SignUp} />
          )}

          {!loggedIn && (
            <Route exact path="/login" name="Login">
              <Login setLoggedIn={setLoggedIn}></Login>
            </Route>
          )}

          {!loggedIn && (
            <Route path="/" name="Login">
              <Redirect to="/login" />
            </Route>
          )}
        </Switch>{" "}
      </div>{" "}
    </div>
  );
};

export default Routes;
