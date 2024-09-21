import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import MainRoutes from "./routes/MainRoutes";
import UserContext from "./context/userContext";
import CartContext from "./context/CartContext";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token,setToken]= useCookies(['jwt-token']);
  

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`,{withCredentials:true})
    .then((res)=>{
      console.log(token);
      const tokenDetails = jwtDecode(res.data.token);
      setUser({username: tokenDetails.user, id: tokenDetails.id});
      setToken('jwt-token', res.data.token, {httpOnly: true});

    })
  },[])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="app-wrapper">
          <Header color="light" light={true} expand="md" container="md" />
          <MainRoutes />
          <Footer />
        </div>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
