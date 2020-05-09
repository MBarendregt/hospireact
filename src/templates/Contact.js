import React from 'react';
import '../static/shared.css'
import '../static/contact.css'
import { withTranslation, Trans } from 'react-i18next';
import ContactForm from './ContactForm'

function Contact({ t, tReady }) {
    if (!tReady) return <p></p>
    return (
        <>
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