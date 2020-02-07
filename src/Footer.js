import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

function Footer({ t }) {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <nav>
                    <ul className="main-footer__links">
                        <li className="main-footer__link1">
                            <a href={"mailto:" + t("common:hospiemail")} target="_top">{t("common:hospiemail")}</a>
                        </li>
                        <li className="main-footer__link2">
                            <Link to="/contact">{t("common:contact")}</Link>
                        </li>
                        <li className="main-footer__link3">
                            <Link to="/privacy">{t("common:privacy")}</Link>
                        </li>
                        <li className="main-footer__link4">
                            <Link to="/cookies">{t("common:cookies")}</Link>
                        </li>
                        <li className="main-footer__link5">
                            <span>{t("common:kvknumber")}</span>
                        </li>
                    </ul>
                </nav>
                <div className="social-container">
                    <div className="social-container__image">
                        <a href="https://www.instagram.com/hospihousing/" target="__blank" rel="noopener noreferrer">
                            <img src={require("./static/images/glyph-logo_May2016-white.png")} alt="Instagram logo to hospihousing" className="social-image" />
                        </a>
                    </div>
                    <div className="social-container__image">
                        <a href="https://www.linkedin.com/company/hospi/" target="__blank" rel="noopener noreferrer">
                            <img src={require("./static/images/linkedinlogo-white.png")} alt="Linkedin logo to hospihousing" className="social-image" />
                        </a>
                    </div>
                    <div className="social-container__image">
                        <a href="https://www.facebook.com/Hospihousing" target="__blank" rel="noopener noreferrer">
                            <img src={require("./static/images/f_logo_RGB-White_250.png")} alt="Facebook logo to hospihousing" className="social-image" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default withTranslation(["Footer", "common"])(Footer);


