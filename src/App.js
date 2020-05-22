import React from 'react';
import { Helmet } from "react-helmet";
import './static/main.css'
import './static/shared.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { withTranslation, Trans } from 'react-i18next';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
// import ReactPixel from 'react-facebook-pixel';


// const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};



export const initGA = (trackingID) => {
    ReactGA.initialize(trackingID);
}

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

    // ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

    // ReactPixel.pageView(); 					// For tracking page view
    // ReactPixel.track(event, data) 		// For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
    // ReactPixel.trackCustom(event, data) 	// For tracking custom events
}


function App({ t, tReady }) {
    if (!tReady) return <p></p>
    return (
        <>

            <div id="App">
                <Helmet>
                    <title>Hospita worden | Hospi housing | Utrecht</title>
                    <meta name="description" content="Altijd al hospita willen worden? Hospi housing koppelt Internationale studenten aan lokale hospita's en zorgt voor beiden voor een unieke ervaring." />
                    <meta name="keywords" content="Hospita worden, Hospi Housing, Hospita, Internationale student in huis, Hospi"></meta>

                </Helmet>
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


