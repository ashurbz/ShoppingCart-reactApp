import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'; 

import { withStyles } from "@material-ui/core/styles";

import LinearProgress from '@material-ui/core/LinearProgress';
import {Redirect} from "react-router-dom"
import "./index.css";

const styles = theme => ({
    email: {
        background: '#48a026',
        color: 'white',
    },
    gmail: {
        background: '#4385f5',
    },

});




class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            email: '',
            name: '',
            password: '',

            loader:false,
            signup:false,
            error:false,
            msg:"Incorrect UserName Passcode!!",
            loggedIn:false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    login=()=>{
       
         
     if(!localStorage.getItem(this.state.email)){
       return   console.log("User doesn't exist");
     }
     if(localStorage.getItem(this.state.email)!=this.state.password){
       return console.log("Incorrect Password!!");
    }
    else{
        localStorage.setItem("loggedIn",true)
        this.props.setLoggedIn(true);
        return console.log("Success!!!");
        
    }
        
  
      }




    render() {
        console.log(this.props);
        const {
            email,
            password,
            msg,
            loader,
            loggedIn,
            signup


        } = this.state;


        if(loggedIn){
            this.props.setLoggedIn(true);
 }

        if(signup)
        return <Redirect  to={"signup"}/>  

      
    
        return (
<div className={"form"}>         
           <Card style={{ boxShadow: 'none',width:"20rem" }}>
                    <CardContent>
                        <CssBaseline />

                        <Typography
                            variant='h4'
                            style={{
                                fontWeight: '500',
                                textAlign: 'center',
                                marginBottom: '1rem',
                                marginTop: '1rem',
                            }}
                        >
                            Login
                           </Typography>
   
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    fullWidth
                                    size='small'
                                    value={email}
                                    name='email'
                                    label='Email Address'
                                
                                    id='email'
                                  
                                    autoComplete='email'
                                    onChange={this.handleChange}
                                />
                          
                    
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    fullWidth
                                    size='small'
                                    value={password}
                                    name='password'
                                    label='Password'
                                  
                                    id='password'
                                   
                                    autoComplete='password'
                                    onChange={this.handleChange}
                                />
                          
                      
                        
                                {loader?<div><LinearProgress style={{marginBottom:"10px "}}/><LinearProgress color={"secondary"}/></div>:<Button
                                     style={{marginBottom:"20px"}}
                                    type='submit'
                                    id='signin'
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                    onClick={this.login}
                                >
                                   Login
                              </Button>}

                              <Button
                                 onClick={()=>{
                                    this.setState({
                                        ...this.state,
                                       
                                        signup:true
                                    })
                                }}
                                type='submit'
                                id='signin'
                                variant='contained'
                                color='primary'
                                fullWidth
                            >
                               Sign Up
                          </Button>

                          { this.state.error&&<div style={{color:"red",
                            textAlign:"center",
                            fontWeight:"bold"
                            
                            }}>{msg}</div>}
                          


                    </CardContent>
                </Card>
</div>
          

        );
    }
}




export default withStyles(styles)(index);



