import { header } from "express-validator";
import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import './App.css';


function App() {

  return (
    <div className="sweet-loading">
      <PacmanLoader size={150} color="#D7D336" loading/>
    </div>
  );
}

export default App;
