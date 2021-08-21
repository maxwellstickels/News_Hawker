import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

function NotFound(props) {
  return (
    <main>
        <div style={{height:"70px"}}></div>
        <p style={{textAlign:"center", fontSize:"72px"}}><u>404</u></p>
        <p style={{textAlign:"center"}}> The page you are looking for does not exist! Sorry!</p>
        <p style={{textAlign:"center"}}><Link to="/" style={{color: "#aaaaaa", textDecoration: "none"}}>← Go to Homepage</Link></p>
        <div style={{height:"100px"}}></div>
    </main>
  );
};

export default NotFound;