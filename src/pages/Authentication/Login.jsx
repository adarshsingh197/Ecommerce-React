import React, { useRef } from "react";
import './Auth.css'
import Auth from "../../components/Auth/Auth";
import { Link } from "react-router-dom";
import { signin } from "../../api/fakestoreProd";
const Login = () => {
  const authRef = useRef(null);
  async function onAuthFormSubmit(formDetails){
    try{
      const response = await axios.post(signin(),{
        username:formDetails.username,
        email:formDetails.email,
        password:formDetails.password
      });
      console.log(response);
    }
    catch(error){
      authRef.connect.resetFormData();
      console.log(error)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
      </div>
      <div className="login-wrapper" id="loginForm">
      <h4 className="text-center">Login</h4>

        <Auth onSubmit={()=>{

        }}/>
        <div className="signup-btn text-center" id="showSignupBtn">
          <Link to="/signup">Don't have an Account? Sign Up Here</Link> 
        </div>
      </div>
    </div>
  );
};

export default Login;
