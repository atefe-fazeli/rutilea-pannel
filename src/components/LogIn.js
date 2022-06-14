import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom"
const LogIn = () => {
    const[data,setData]=useState({
        email:'',
        password:'',
    });
    const navigate= useNavigate()
    function clickHandler(){
        axios.post("http://193.151.129.211:8999/api/token/",
        {
            email: data.email,
            password : data.password
        }
        ).then((response)=>{
            if (response.status==200 ){
                navigate("/")
            }else{
                console.log("wrong email or password")
            }
        })
        
                
    }
    return (
        <div className={styles.MainLoginContainer}>
            <div className={styles.SinginHeader}>
                <h1>Log in</h1>
            </div>
            <div className={styles.loginfirstcontainer}>
                
                <input placeholder='Email or phone number' onChange={(event)=>setData({...data,email:event.target.value})} />
              
                <input placeholder='Password' onChange={(event)=>setData({...data,password:event.target.value})} />
            </div>
            <div className={styles.loginsecondcontainer}>
                <input
                type="checkbox"
                name="isAccepted" />
                <label>remember me</label>
                <a>Forget Password?</a>
            </div>
            <div className={styles.loginthirdcontainer}>
                <button id='bulebtn' onClick={clickHandler}>Log In</button>
                 <div className={styles.hrcontainer}><hr/></div>
                <div className={styles.orcontainer}>OR</div>
                <button id='balckbtn'>Log in With GOOGLE</button>
                <p>Don't have an acount?<a>Sign Up</a></p>
            </div>
            
        </div>
    );
};

export default LogIn;