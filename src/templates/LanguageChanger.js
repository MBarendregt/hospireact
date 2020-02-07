import React from 'react';
import i18n from '../i18n';
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
// import { withNamespaces } from 'react-i18next';

function LanguageChanger({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    // if (!tReady) return <p>{t('common:loading')}</p>
    return (
        <nav className="main-nav">
            <ul className="main-nav__items">


                <li className="main-nav__item "><Link to="/students">{t('zoekkamer')}</Link>
                </li>
                <li className="main-nav__item "><Link to="/hospita">{t('wordhospita')}</Link>
                </li>
                <li className="main-nav__item"><Link to="/blog">{t('blog')}</Link></li>
                <li className="main-nav__item"><Link to="/contact">{t('contact')}</Link></li>
                <li className="main-nav__item--flag"><button className="nlbutton" onClick={() => changeLanguage('nl')} /></li>
                <li className="main-nav__item--flag"><button className="engbutton" onClick={() => changeLanguage('en')} /></li>
            </ul>
        </nav>
    )
}

export default withTranslation(['header', 'common'])(LanguageChanger);