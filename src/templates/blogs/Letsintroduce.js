import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';
import '../../static/shared.css'
import '../../static/blog.css'
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'


function Letsintroduce({ t, tReady }) {
    if (!tReady) return <p></p>
    const blog = blogLoader.get("letsintroduce")

    const renderedimage_1 = RenderImages(blog.secondsource, { "backgroundPosition": "80% 40%" })
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
                        <Trans>{t("listitem_1")}<Link to="/"></Link></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_2")}<a href="https://dutchreview.com/expat/housing/renting/student-housing-crisis-in-the-netherlands/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.dutchnews.nl/news/2018/08/tents-boats-and-a-professors-spare-room-student-room-shortage-hits-groningen/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_3")}</Trans>
                    </span>
                </div>
            </section>
        </>
    );

}

export default withTranslation(['blog_letsintroduce', 'common'])(Letsintroduce);