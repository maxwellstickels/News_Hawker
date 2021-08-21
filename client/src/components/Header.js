import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
        <section className="wings">
            <lord-icon
                src="https://cdn.lordicon.com/hpxruznz.json"
                trigger="loop"
                colors="primary:#ea5a5a,secondary:#08a88a"
                style="width:80px;height:80px">
            </lord-icon>
        </section>
        <h1><i>News Hawker</i></h1>
        <nav>
            <ul>
                <li><a>Saved Stories</a></li>
                <li><a>Logout</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;