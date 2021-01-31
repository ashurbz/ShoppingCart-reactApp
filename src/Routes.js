import React from 'react';
import SignUp from './components/signUp/index.js';
import Login from './components/login/index.js';
import Home from "./components/Home"
import {useState,useEffect} from   "react";
import Button from '@material-ui/core/Button';
import "./main.css"

import { Route, Switch,Redirect } from 'react-router-dom';

const Routes = () =>{
  
  const [loggedIn,setLoggedIn]=useState(false); 
  
 
  useEffect(() => {
    
    if( localStorage.getItem("loggedIn")){

      setLoggedIn(true); 
  }else{
    setLoggedIn(false);
  }

  }, [])
  
 
  function logout(){
     
    // localStorage.clear();
    setLoggedIn(false);
    localStorage.setItem("loggedIn",false)
    // setLoggedIn(false;

  }


 

  
  
 

  
  
  return (


<div >
<div className={"header"} > <div style={{textAlign:"center"}}> Shopping Home  </div> <div>{loggedIn&&<Button variant="contained" color="primary" style={{float:"right"}} onClick={logout}>Logout</Button>}</div></div> 

<div className={"body"}>  <Switch>

  {
    loggedIn&& <Route
  
    path='/'
    name='Home'
    component={Home}
  />}
  
 
   
    {!loggedIn&& <Route
      exact
      path='/signUp'
      name='Sign Up'
      component={SignUp}
    />}

    
      {!loggedIn&& <Route
      exact
      path='/login'
      name='Login'
      
      
    >
      <Login setLoggedIn={setLoggedIn}></Login>
      </Route>}

     
      {!loggedIn&& <Route
      
      path='/'
      name='Login'
      
      
    >
     <Redirect to="/login"/>  
         </Route>}


     
   
  </Switch> </div> </div>
);}

export default Routes;


