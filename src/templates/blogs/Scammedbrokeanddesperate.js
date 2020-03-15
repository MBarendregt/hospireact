import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';
import '../../static/shared.css'
import '../../static/blog.css'
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'


function Scammedbrokeanddesperate({ t, tReady }) {
    if (!tReady) return <p></p>
    const blog = blogLoader.get("scammedbrokeanddesperate")

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
                        <Trans>{t("listitem_1")}<a href="https://dutchreview.com/featured/the-student-housing-nightmare-a-tale-of-discrimination-fraud-and-protest/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_2")}<a href="https://www.nu.nl/wonen/5995903/hoe-kamernood-ervoor-zorgt-dat-studenten-op-vakantieparken-wonen.html" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_3")}</Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>

                        <Trans>{t("listitem_4")}<a href="https://trajectum.hu.nl/opgelicht-blut-en-wanhopig-internationale-studenten-hebben-het-zwaar-op-de-utrechtse-woningmarkt/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_5")}<Link to="/contact"></Link><a href={"mailto:" + t("common:hospiemail")} target="_top"></a></Trans>
                    </span>
                </div>

            </section>
        </>
    );

}

export default withTranslation(['blog_scammedbrokeanddesperate', 'common'])(Scammedbrokeanddesperate);