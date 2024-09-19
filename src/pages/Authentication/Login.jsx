import React, { useRef } from "react";
import './Auth.css';
import Auth from "../../components/Auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios
import { signin } from "../../api/fakestoreProd";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
const Login = () => {
  const authRef = useRef(null);
  const navigate = useNavigate()
  const [token,setToken]= useCookies(['jwt-token'])

  async function onAuthFormSubmit(formDetails) {
    console.log(formDetails);
    try {
      const response = await axios.post(signin(), {
        username: formDetails.username,
        email: formDetails.email,
        password: formDetails.password
      });
      console.log(response);
      setToken('jwt-token',response.data.token,{httpOnly:true});
      navigate('/')
    } catch (error) {
      if (authRef.current && authRef.current.resetFormData) {
        authRef.current.resetFormData();  // Correct reference to the method
      }
      console.error("Error during sign in:", error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="home-title text-center">Welcome to Shop Cart</h2>
      </div>
      <div className="login-wrapper" id="loginForm">
        <h4 className="text-center">Login</h4>

        <Auth ref={authRef} onSubmit={onAuthFormSubmit} />
        <div className="signup-btn text-center" id="showSignupBtn">
          <Link to="/signup">Don't have an Account? Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
