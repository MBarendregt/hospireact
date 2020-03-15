import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../static/shared.css'
import '../static/privacy_cookies.css'


function Cookies({ t, tReady }) {
    if (!tReady) return <p></p>
    return (
        <main>
            <section>
                <div className="general_title">
                    <h1>{t("title")}</h1>
                </div>
                <div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("general_introduction.text")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("cookie_introduction.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookie_introduction.text")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookie_introduction.subtext_1")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("cookie_introduction.listitem_1")}</li>
                            <li>{t("cookie_introduction.listitem_2")}</li>
                            <li>{t("cookie_introduction.listitem_3")}</li>
                        </ul>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookie_introduction.subtext_2")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("cookie_usage.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookie_usage.text")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("cookie_usage.listitem_1")}</li>
                            <li>{t("cookie_usage.listitem_2")}</li>
                            <li>{t("cookie_usage.listitem_3")}</li>
                            <li>{t("cookie_usage.listitem_4")}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("function_cookies.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("function_cookies.text")}<Link to="/"></Link></Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("function_cookies.listitem_1")}</li>
                            <li>{t("function_cookies.listitem_2")}</li>
                            <li>{t("function_cookies.listitem_3")}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("preference_cookies.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("preference_cookies.text")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("analytic_cookies.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("analytic_cookies.text")}</Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("analytic_cookies.listitem_1")}</li>
                            <li>{t("analytic_cookies.listitem_2")}</li>
                            <li>{t("analytic_cookies.listitem_3")}</li>
                            <li>{t("analytic_cookies.listitem_4")}</li>
                            <li>{t("analytic_cookies.listitem_5")}</li>
                        </ul>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("analytic_cookies.subtext_1")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("social_cookies.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("social_cookies.text")}</Trans>
                        </span>
                    </div>
                    <div className="text_list">
                        <ul>
                            <li>{t("social_cookies.listitem_1")}</li>

                        </ul>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("social_cookies.subtext_1")}</Trans>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="text_title">
                        <h2 >
                            <Trans>{t("cookie_control.title")}</Trans>
                        </h2>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookie_control.text")}</Trans>
                        </span>
                    </div>
                    <div className="text_block">
                        <span className="text_block">
                            <Trans>{t("cookie_control.subtext_1")}</Trans>
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
        </main>
    )
}
// export default Contact

export default withTranslation(['cookies', 'common'])(Cookies);