import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <Header color="light" light={true} expand="md" container="md"></Header>
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
