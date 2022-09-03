import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
//Need to check whether this installation in the main folder, instead of the frontend folder works for the ui icons
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const {user} = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" 
          element={user ? <Home /> : <Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
