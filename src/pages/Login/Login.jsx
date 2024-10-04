import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} className='Login_logo' alt=''/>
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder="Enter your name here."/>:<></>}
          
          <input type='email' placeholder={signState==="Sign Up"?'Enter your email here.':'Email'}/>
          <input type='password' placeholder={signState==="Sign Up"?'Enter Minimum 8 digit password':'Password'}/>
          <button type='submit'>{signState==="Sign Up"?'Sign Up':'Sign In'}</button>
          <div className="form_help">
          <div className="remember">
            <input type='checkbox'/>
            <label>Remember me</label>
          </div>
          <p>Need help?</p>
        </div>
        </form>
        <div className="form-switch">
          {signState==="Sign Up"?<p>Already have account ? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>:<p>New To Netflix ? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
