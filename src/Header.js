import React from 'react'
import { Link } from 'react-router-dom';
import LanguageChanger from './templates/LanguageChanger'
import i18n from './i18n';
import { withTranslation } from 'react-i18next';
import SideBar from "./sidebar";

// import './static/shared.css'

// class Header extends React.Component {
//     constructor(props) {
//         super(props)
//     }


//     render() {
//         const {t, location } = this.props
//         const changeLanguage = (lng) => {
//                     i18n.changeLanguage(lng);
//                 }

//         console.log(location.pathname)

//         return (
//                     <>
//                         <SideBar width={'60%'} right pageWrapId={"page-wrap"} outerContainerId={"App"} t />
//                         <header className="main-header">
            
//                             <div>
//                                 <Link to="/"><img className="main-header__brand" src={require("./static/images/transparantCompleetLogo.png")} alt="Hospi Housing" /></Link>
//                             </div>
//                             <nav className="main-nav--mobile">
//                                 <ul className="main-nav__items">
//                                     <li className="main-nav__item--flag"><button className="nlbutton" onClick={() => changeLanguage('nl')} /></li>
//                                     <li className="main-nav__item--flag"><button className="engbutton" onClick={() => changeLanguage('en')} /></li>
//                                 </ul>
//                             </nav>
//                             <LanguageChanger />
            
//                         </header>
            
//                     </>
            
//                 )
//     }
// }
// const AdaptiveHeader = withRouter(Header)

// export default withTranslation(['header'])(AdaptiveHeader);

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
                <LanguageChanger />

            </header>

        </>

    )
}
// const AdaptiveHeader = withRouter(Header)

// export default withTranslation(['header'])(AdaptiveHeader);

export default withTranslation(['header'])(Header);