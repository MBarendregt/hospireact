import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'

function Cookies({ t }) {

    return (
        <main>
            <section>
                <div className="text-container">
                    <span><Trans>{t("exptext")}<br /><br /></Trans>
                    </span>
                </div>
            </section>
        </main>
    )
}
// export default Contact

export default withTranslation(['cookies', 'common'])(Cookies);