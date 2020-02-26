import React from 'react'
import { Link } from 'react-router-dom'
import LanguageChanger from './templates/LanguageChanger'
import i18n from './i18n';
import { withTranslation } from 'react-i18next';
import SideBar from "./sidebar";

function Header({ t }) {


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <>
            <SideBar width={'60%'} right pageWrapId={"page-wrap"} outerContainerId={"App"} t />
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
                <div id="sidebarMenu">
                    <ul className="sidebarMenuInner">
                        <li><Link to="/students">{t("lookingforroom")}</Link></li>
                        <li><Link to="/hospita">{t("becomehost")}</Link></li>
                        <li><Link to="/blog">{t("blog")}</Link></li>
                        <li><Link to="/contact">{t("contact")}</Link></li>
                    </ul>
                </div>
                <LanguageChanger />

            </header>

        </>
        // <header className="main-header">
        //     <div>
        //         <Link to="/"><img className="main-header__brand" src={require("./static/images/transparantCompleetLogo.png")} alt="Hospi Housing" /></Link>

        //     </div>
        //     <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        /*             
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
          */


        // </header>

    )
}

export default withTranslation(['header'])(Header);