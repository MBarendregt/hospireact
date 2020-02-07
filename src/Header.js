import React from 'react'
import { Link } from 'react-router-dom'
import LanguageChanger from './templates/LanguageChanger'
import i18n from './i18n';

export default function Header() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <header className="main-header">
            <div>
                <Link to="/"><img className="main-header__brand" src={require("./static/images/transparantCompleetLogo.png")} alt="Hospi Housing" /></Link>

            </div>
            <nav className="main-nav--mobile">
                <ul className="main-nav__items">
                    <li className="main-nav__item--flag"><button className="nlbutton" onClick={() => changeLanguage('nl')} /></li>
                    <li className="main-nav__item--flag"><button className="engbutton" onClick={() => changeLanguage('en')} /></li>
                </ul>
            </nav>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1" />
                <div className="spinner horizontal" />
                <div className="spinner diagonal part-2" />
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li><Link to="/students">Ik zoek een kamer</Link></li>
                    <li><Link to="/hospita">Ik word hospita</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <LanguageChanger />
        </header>

    )
}
