import "./App.css";
//import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import About from "./routes/About";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
