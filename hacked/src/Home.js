import {Link } from "react-router-dom";

import './Main.css';

function App() {
return(
<div>
    <div className="header">
    <h1>The New Anonymous &trade;</h1>
    <h2 style={{
        fontFamily:"'Courier', sans-serif",
        fontSize:"20px",
        marginLeft: "100px",
        marginRight: "100px",
      }}>Hackers: Akhshra Puru, Caly Zheng, Mackenzie Luong, Rabeea Shahid, Sanaa Bhaidani</h2>
  </div>
  <div className="center">
  <div className="Next-page">
    <h1>CONCERT CHARMS PHRASE GENERATOR</h1>
    <p style={{
        fontFamily:"'Courier', sans-serif",
        fontSize:"20px"
      }}> Idea inspired by friendship bracelets made by Swifties to exchange at her concerts.</p>
    <p style={{
        fontFamily:"'Courier', sans-serif",
        fontSize:"20px",
        marginLeft: "100px",
        marginRight: "100px",
      }}> This phrase generator generates a lyric or phrase from your chosen artist to include on your concert charm.
        The generated phrase will only include the letters you indicate as available to you. </p>
    <a href="index.html">
    <Link to="/Main"><button className="homeb">Continue</button></Link>
    </a>      
  </div>
    </div>
    <footer>
      The New Anonymous © 2023 - All Rights Reserved
    </footer>
</div>
);
}

export default App;