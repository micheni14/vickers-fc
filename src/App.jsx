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
import Gallery from "./components/Gallery";
import Matchcenter from "./components/matchcenter/Matchcenter";

import Results from "./components/matchcenter/Results";
import leagueTable from "./components/matchcenter/LeagueTable";
import LeagueTable from "./components/matchcenter/LeagueTable";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className="space-y-2">
        <Navbar />
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
        <Gallery />
        {/* <Routes>
          <Route path="/" element={<Matchcenter />}>
            <Route index element={<Fixtures />} />
            <Route path="leaguetable" element={<LeagueTable />} />
            <Route path="results" element={<Results />} />
          </Route>
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
