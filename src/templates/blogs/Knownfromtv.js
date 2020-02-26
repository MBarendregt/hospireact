import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';
import '../../static/shared.css'
import '../../static/blog.css'
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'


function Knownfromtv({ t }) {
    const blog = blogLoader.get("knownfromtv")

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
                        <Trans>{t("listitem_1")}<a href="https://www.dub.uu.nl/en/news/students-utrecht-breathe-new-life-hospita-we-match-supply-and-demand" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_2")}<a href="https://www.ad.nl/utrecht/hoe-de-ouderwetse-hospita-de-hopeloze-utrechtse-student-aan-onderdak-helpt~a9207d66/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.facebook.com/rtvutrecht/videos/vb.127421560627067/2512058795540158/?type=2&theater" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_3")}</Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>

                        <Trans>{t("listitem_4")}<Link to="/hospita"></Link></Trans>
                    </span>
                </div>
            </section>
        </>
    );

}

export default withTranslation(['blog_knownfromtv', 'common'])(Knownfromtv);