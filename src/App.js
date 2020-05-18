import React from 'react';
import './static/main.css'
import './static/shared.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { withTranslation, Trans } from 'react-i18next';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';

export const initGA = (trackingID) => {
    ReactGA.initialize(trackingID);
}


// const history = createBrowserHistory;
// ReactGA.pageview(window.location.pathname + window.location.search);

export const PageView = () => {
    ReactGA.pageview(window.location.pathname +
        window.location.search);
}
export const Event = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};

function setupGa() {
    initGA('UA-136806100-2');
    PageView();
}


function App({ t, tReady }) {
    if (!tReady) return <p></p>
    return (
        <>

            <div id="App">
                <Header />
                <div id="page-wrap">
                    <Main />
                    <Footer />
                </div>
            </div>
            {setupGa()}
            <CookieConsent
                // enableDeclineButton
                // flipButtons
                location="bottom"
                buttonText={t("cookie_accept")}
                // declineButtonText={t("cookie_decline")}
                cookieName="trackingCookies"
                style={{ background: "#2B373B" }}
                containerClasses="cookiecontainer"
                buttonClasses="cookiecontainer--button-accept"
                // declineButtonClasses="cookiecontainer--button-decline"
                expires={150}
            // onAccept={setupGa}
            >
                <Trans>{t("cookie_text")}<Link to="/cookies"></Link></Trans>{" "}
            </CookieConsent>
        </>
    );
}

export default withTranslation(["cookiebar"])(App);

