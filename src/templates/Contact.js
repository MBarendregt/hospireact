import React from 'react';
import '../static/shared.css'
import '../static/contact.css'
import { withTranslation, Trans } from 'react-i18next';
import ContactForm from './ContactForm'
import { Helmet } from "react-helmet";

function Contact({ t, tReady }) {
    if (!tReady) return <p></p>
    return (
        <>
            <Helmet>
                <title>Contact| Hospi housing | Utrecht</title>
                <meta name="description" content="Vragen over wat het betekend om hospita te zijn of bij een hospita te wonen? Neem gerust contact met ons op." />
            </Helmet>
            <section>
                <div className="banner-contact banner-otherpages">
                    <h1>
                        <Trans>{t("bannertext")}<span className="colored-text"></span></Trans>
                    </h1>
                </div>
            </section>
            <section>
                <div className="text-container">
                    <span><Trans>{t("exptext")}<br /><br /></Trans>
                    </span>
                </div>
            </section>
            <div>
                <ContactForm />
            </div>
        </>
    )
}

export default withTranslation(['contact', 'common'])(Contact);