import React,{useState} from 'react'
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"


function SignIn() {



const [email,setemail]=useState("");
const[password,setpassword]=useState("");

const onRegister=()=>{
  window.location.href="/";
  }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          const user =await signInWithEmailAndPassword(auth,email,password);
          console.log(user);
          window. window.location.href = "/";
                } catch(error){
                  console.log(error);
                }
      }
  return (
    <div>

<div className="container">
        <form className="white" >
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="email"  onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={(e)=>setpassword(e.target.value)} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0" onClick={
             handleSubmit
            }>SignIn</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignIn