import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { loadAnimation } from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';
import Auth from '../utils/auth';

function Header() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <section className="wings">
          <lord-icon
            src="https://cdn.lordicon.com/hpxruznz.json"
            trigger="loop"
            colors="primary:#ea5a5a,secondary:#08a88a"
            style={{ width: '80px', height: '80px' }}
          ></lord-icon>
        </section>
        <h1>
          <Link to="/" id="header-link">
            <i>News Hawker</i>
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/saved">Saved Stories</Link>
            </li>
            <li>
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
              {/* <Link to="/login">Login</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <section className="wings">
          <lord-icon
            src="https://cdn.lordicon.com/hpxruznz.json"
            trigger="loop"
            colors="primary:#ea5a5a,secondary:#08a88a"
            style={{ width: '80px', height: '80px' }}
          ></lord-icon>
        </section>
        <h1>
          <Link to="/" id="header-link">
            <i>News Hawker</i>
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/saved">Saved Stories</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

defineLordIconElement(loadAnimation);

export default Header;
