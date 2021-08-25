import '../App.css';

import React from 'react';

function SavedArticles(props) {

    return (
        <main>
            <div className="article-box">
                <section className="article-content">
                    <h4 className="article-title">Article Title</h4>
                    <p className="article-source">Article Source</p>
                    <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
                </section>
                <div className="article-image" style={{backgroundImage:"url(https://via.placeholder.com/120x478)"}}>
                        <div className="article-save">Save</div>
                </div>
            </div>
            <div className="article-box">
                <section className="article-content">
                    <h4 className="article-title saved">Article Title</h4>
                    <p className="article-source">Article Source</p>
                    <p className="article-text">Article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text article text.</p>
                </section>
                <div className="article-image" style={{backgroundImage:"url(https://via.placeholder.com/200x340)"}}>
                        <div className="article-save">Save</div>
                </div>
            </div>
        </main>
    );
};

export default SavedArticles;