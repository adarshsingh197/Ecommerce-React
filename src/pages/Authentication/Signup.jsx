import React, { useState } from 'react'
import './Auth.css'
import Auth from '../../components/Auth/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../api/fakestoreProd'
import axios from 'axios'
const Signup = () => {
  const navigate = useNavigate();
  const [resetSignUpForm,setResetSignUpForm]= useState(false)


  async function onAuthFormSubmit(arg) {
    try {
      const response = await axios.post(signup(), {
        username: arg.username,
        email: arg.email,
        password: arg.password,
      });

        console.log("Signup successful!");

        navigate("/signin");
     
    } catch (error) {
      console.log("error");
      setResetSignUpForm(true);
    }
  }
  
  return (
    <div className="container">
    <div className="row">
      <h2 className="home-title text-center">Welcome to Shop Cart</h2>
    </div>
    <div className="login-wrapper" id="loginForm">
    <h4 className="text-center">Signup</h4>

    <Auth  
  onSubmit={
    onAuthFormSubmit
  }
  resetForm={resetSignUpForm}
/>

      <div className="signup-btn text-center" id="showSignupBtn">
      <Link to="/signin">Already have an Account? Sign In Here</Link>  
      </div>
    </div>
  </div>
  )
}

export default Signup