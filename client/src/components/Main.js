import React from "react";
import "../App.css";

function Main(props) {
  return (
    <main>
        <div className="article-box">
            <section className="article-content">
                <h4 className="article-title">Article Title</h4>
                <p className="article-source">Article Source</p>
                <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
            </section>
            <img className="article-image" src="https://via.placeholder.com/120x478"/>
        </div>
        <div className="article-box">
            <section className="article-content">
                <h4 className="article-title saved">Article Title</h4>
                <p className="article-source">Article Source</p>
                <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
            </section>
            <img className="article-image" src="https://via.placeholder.com/200x340"/>
        </div>
    </main>
  );
};

export default Main;