import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import React from "react";
import Adduser from "./users/Adduser";
import Edituser from "./users/Edituser";
import Readuser from "./users/Readuser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/newuser" element={<Adduser />} />
          <Route exact path="/edituser/:id" element={<Edituser />} />
          <Route exact path="/readuser/:id" element={<Readuser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
