import React from 'react';
import i18n from '../i18n';
import { Link, withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
class LanguageChanger extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { t, location, tReady } = this.props
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        }
        if (!tReady) return <p></p>
        return (
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <Link
                            className={location.pathname.indexOf('/students') !== -1 ? "active-page" : ""}
                            to="/students">{t('lookingforroom')}</Link>
                    </li>
                    <li className="main-nav__item ">
                        <Link
                            className={location.pathname.indexOf('/hospita') !== -1 ? "active-page" : ""}
                            to="/hospita">{t('becomehost')}</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link
                            className={location.pathname.indexOf('/blog') !== -1 ? "active-page" : ""}
                            to="/blog">{t('blog')}</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link
                            className={location.pathname.indexOf('/contact') !== -1 ? "active-page" : ""}
                            to="/contact">{t('contact')}</Link>
                    </li>
                    <li className="main-nav__item--flag"><button className="nlbutton" onClick={() => changeLanguage('nl')} /></li>
                    <li className="main-nav__item--flag"><button className="engbutton" onClick={() => changeLanguage('en')} /></li>
                </ul>
            </nav>
        )
    }
}

const AdaptiveHeader = withRouter(LanguageChanger)

export default withTranslation(['header', 'common'])(AdaptiveHeader);







// function LanguageChanger({ t }) {
//     const changeLanguage = (lng) => {
//         i18n.changeLanguage(lng);
//     }
//     // if (!tReady) return <p>{t('common:loading')}</p>
//     return (
//         <nav className="main-nav">
//             <ul className="main-nav__items">


//                 <li className="main-nav__item "><Link to="/students">{t('lookingforroom')}</Link>
//                 </li>
//                 <li className="main-nav__item "><Link to="/hospita">{t('becomehost')}</Link>
//                 </li>
//                 <li className="main-nav__item"><Link to="/blog">{t('blog')}</Link></li>
//                 <li className="main-nav__item"><Link to="/contact">{t('contact')}</Link></li>
//                 <li className="main-nav__item--flag"><button className="nlbutton" onClick={() => changeLanguage('nl')} /></li>
//                 <li className="main-nav__item--flag"><button className="engbutton" onClick={() => changeLanguage('en')} /></li>
//             </ul>
//         </nav>
//     )
// }

// export default withTranslation(['header', 'common'])(LanguageChanger);