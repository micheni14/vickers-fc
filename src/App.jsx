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
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";




function App() {
  return (

    <div className="relative">

    <Router>
      {/* <Navbar /> */}
      
      <NavigationBar/>
      <div className="space-y-16 ">
        <Hero />
        <History />
        <Routes>
          <Route path="/" element={<Team />}>
            <Route index element={<Official />} />
            <Route path="women" element={<Womens />} />
            <Route path="men" element={<Mens />} />
            
          </Route>
        
        </Routes>
        <Sponsors />
        <Contact />
        <Footer />

      </div>
      </Router>
      <a   href="https://wa.me/254740234157"              target="_blank"
            rel="noopener noreferrer">

      <div className="fixed bottom-10 md:bottom-32 shadow-md border px-2 py-1 bg-white text-green-500 rounded-full flex space-x-2 items-center right-8">

        
        <span><i class="bx bx-md bxl-whatsapp"></i></span>
<span>Chat with us</span>
      </div>


      </a>


    </div>
  );
}

export default App;
