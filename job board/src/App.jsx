import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserContext from "./pages/UserContext";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

function App() {
  const [userEmail, setUserEmail] = useState(null);
  const [myUser, setMyUser] = useState(null);


  return (
    <UserContext.Provider value={{ userEmail, setUserEmail, myUser, setMyUser }}>
      <Navbar />
      <Outlet />
      <Footer/>
    </UserContext.Provider>
  );
}

export default App;
