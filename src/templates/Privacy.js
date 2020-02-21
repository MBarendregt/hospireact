import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../static/shared.css'
import '../static/privacy.css'

function Privacy({ t }) {

    return (
        <main>
            <section>
                <div className="general_title">
                    <h1>{t("title")}</h1>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("general_assumptions.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("general_assumptions.text")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_block">
                        <span >
                            <Trans>{t("general_assumptions.subtext")}<a href={"mailto:" + t("common:hospiemail")} target="_top"></a></Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("data_collection.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("data_collection.text")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("data_collection.listitem_1")}</li>
                            <li>{t("data_collection.listitem_2")}</li>
                            <li>{t("data_collection.listitem_3")}</li>
                            <li>{t("data_collection.listitem_4")}</li>
                            <li>{t("data_collection.listitem_5")}</li>
                            <li>{t("data_collection.listitem_6")}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
// export default Contact

export default withTranslation(['privacy', 'common'])(Privacy);