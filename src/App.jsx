import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import MainRoutes from "./routes/MainRoutes";
import UserContext from "./context/userContext";
import CartContext from "./context/CartContext";
function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({products:[]});

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
