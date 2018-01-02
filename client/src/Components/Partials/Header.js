import React from 'react'
export const Header = () => (
    <header className="short-header">
        <div className="gradient-block"></div>
        <div className="row header-content">
            <div id="logo">
                <a href="index.html">Author</a>
            </div>

            <nav id="main-nav-wrap">
                <ul className="main-navigation sf-menu">
                    <li className="current"><a href="/" title="">Home</a></li>
                    <li><a href="/about" title="">About</a></li>
                    <li><a href="/contact" title="">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
)
