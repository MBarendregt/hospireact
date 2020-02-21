import React from 'react';
import '../static/shared.css'
import '../static/contact.css'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

function Contact({ t }) {

    return (
        <main>
            <section>
                <div className="banner-otherpages">
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
        </main>
    )
}
// export default Contact

export default withTranslation(['contact', 'common'])(Contact);