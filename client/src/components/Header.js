import React from "react";
import "../App.css";

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

function Header() {
  return (
    <header>
        <section className="wings">
            <lord-icon
                src="https://cdn.lordicon.com/hpxruznz.json"
                trigger="loop"
                colors="primary:#ea5a5a,secondary:#08a88a"
                style={{width: '80px', height:'80px'}}>
            </lord-icon>
        </section>
        <h1><i>News Hawker</i></h1>
        <nav>
            <ul>
                <li><a href="/">Saved Stories</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </nav>
    </header>
  );
};

defineLordIconElement(loadAnimation);

export default Header;