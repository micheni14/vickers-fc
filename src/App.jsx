import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import History from "./components/History";
import Team from "./components/team/Team";
import Womens from "./components/team/Womens";
import Mens from "./components/team/Mens";
import Official from "./components/team/Official";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavigationBar/>
      <div className="space-y-16">
        <Hero />
        <History />
        <Routes>
          <Route path="/" element={<Team />}>
            <Route index element={<Official />} />
            <Route path="women" element={<Womens />} />
            <Route path="men" element={<Mens />} />
          </Route>
          <Route>
          {/* <Route path="/" element={<Fixtures />} >
          <Route index element={<Leaguetable />} />
            <Route path="women" element={< Results />} /> */}
          </Route>
        </Routes>
        <Sponsors />
        <Contact />
        <Footer />
        
        
      </div>
    </Router>
  );
}

export default App;
