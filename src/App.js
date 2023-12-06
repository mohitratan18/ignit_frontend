import "./App.css";
import Contactus from "./components/Contactus";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Meetings from "./components/Meetings";
import Admin from "./components/Admin";
import Admindashboard from "./components/Admindashboard";
import Aboutall from "./components/Aboutall";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/contactus" element={<Contactus/>}></Route>
      <Route exact path="/aboutus" element={<Aboutus/>} ></Route>
      <Route exact path="/meetings" element={<Meetings/>} ></Route>
      <Route exact path="/admin" element={<Admin/>} ></Route>
      <Route exact path="/dashboard" element={<Admindashboard/>} ></Route>
      <Route exact path="/aboutall" element={<Aboutall/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
