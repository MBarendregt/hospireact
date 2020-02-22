import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../static/shared.css'
import '../static/privacy_cookies.css'

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
                            <Trans>{t("general_assumptions.subtext_1")}<a href={"mailto:" + t("common:hospiemail")} target="_top"></a></Trans>
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
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("which_data_collection.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("which_data_collection.text")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("which_data_collection.subtitle_1")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("which_data_collection.subtext_1")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("which_data_collection.sublist_1")}</li>
                        </ul>
                    </div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("which_data_collection.subtitle_2")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("which_data_collection.subtext_2_1")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("which_data_collection.subtext_2_2")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("data_transfer.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("data_transfer.text")}</Trans>
                        </span>
                    </div>
                    <div className="text_block">
                        <span >
                            <Trans>{t("data_transfer.subtext_1")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("data_protection.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("data_protection.text")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("data_retain.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("data_retain.text")}<a href={"mailto:" + t("common:hospiemail")} target="_top"></a></Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("cookies.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookies.text")}</Trans>
                        </span>
                    </div>
                    <div className="text_block">
                        <span >
                            <Trans>{t("cookies.subtext_1")}<Link to="/cookies"></Link></Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("policy_changes.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("policy_changes.text")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("questions_feedback.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("questions_feedback.text")}<a href={"mailto:" + t("common:hospiemail")} target="_top"></a></Trans>
                        </span>
                    </div>
                </div>
            </section>
        </main >
    )
}
// export default Contact

export default withTranslation(['privacy', 'common'])(Privacy);