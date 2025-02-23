// src/App.jsx
import React from "react";
import "./App.css";

/* Import each section component */
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ImpactSection from "./Components/ImpactSection";
import DemoSection from "./Components/DemoSection";
import ProblemHeader from "./Components/ProblemHeader";
/*
   Main application – wires all components together
*/
function App() {
  return (
      <div className="AppContainer">
        <Header />
        <HeroSection />
        <ProblemHeader />
        <ImpactSection />
        <DemoSection />
      </div>
  );
}

export default App;
