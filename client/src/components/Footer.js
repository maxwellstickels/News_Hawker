import React from "react";
import "../App.css";

const innerSection = {
  height: "90px",
  width: "100%",
  borderTop: "1px solid #882200",
};

const outerSection = {
  paddingTop: "3px",
  borderTop: "1px solid #aa0000",
};

const footerLinks = {
  marginTop: "5px"
};

function Footer() {
  return (
    <footer>
        <div style={outerSection}>
            <section style={innerSection}>
                <h2 style={footerLinks}>
                    <a href="https://github.com/Delaalex/">Alejandro</a> | <a href="https://github.com/JG-77">Jessie</a> | <a href="https://github.com/maxwellstickels/">Max</a> | <a href="https://github.com/djony88">Nikola</a>
                </h2>
            </section>
        </div>
    </footer>
  );
};

export default Footer;