import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';
import '../../static/shared.css'
import '../../static/blog.css'
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'


function Housingshortage({ t, tReady }) {
    if (!tReady) return <p></p>
    const blog = blogLoader.get("housingshortage")

    const renderedimage_1 = RenderImages(blog.secondsource)
    return (
        <>
            <section>
                <BackToAllBlogs></BackToAllBlogs>
                <div className="text-concept">
                    <div>
                        <h2>
                            {t("title")}
                        </h2>
                    </div>
                </div>
                <div className="blog_container">
                    {renderedimage_1}
                    <span className="italic_style">
                        <Trans>{t("picture_subtext")}</Trans>
                    </span>
                </div>
            </section>
            <section>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_1")}</Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_2")}<a href="https://www.ad.nl/utrecht/woningnood-studenten-steeds-groter-ook-in-utrecht~a3797b4e/?referrer=https://www.google.com/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.nporadio1.nl/onderzoek/10886-hoe-internationale-studenten-de-dupe-worden-van-het-kamertekort" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_3")}<a href="https://www.dub.uu.nl/nl/achtergrond/van-vakantiepark-naar-gastenverblijf-internationals-op-queeste-naar-een-kamer" target="__blank" rel="noopener noreferrer"></a><a href="https://www.ad.nl/utrecht/woningnood-buitenlandse-studenten-666-euro-voor-kamertje-stayokay-met-vijf-anderen~acb41025/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>

                        <Trans>{t("listitem_4")}<a href="https://lsvb.nl/2019/06/19/internationale-studenten-doelwit-van-uitbuiting-op-woningmarkt/" target="__blank" rel="noopener noreferrer"></a><a href="https://nos.nl/op3/artikel/2247906-ik-ben-voor-1000-euro-opgelicht-en-heb-nog-steeds-geen-kamer.html" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_5")}</Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_6")}<Link to="/contact"></Link></Trans>
                    </span>
                </div>
            </section>
        </>
    );

}

export default withTranslation(['blog_housingshortage', 'common'])(Housingshortage);