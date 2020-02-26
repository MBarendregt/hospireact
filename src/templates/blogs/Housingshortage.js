import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';
import '../../static/shared.css'
import '../../static/blog.css'
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'


function Housingshortage({ t }) {
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
                        <Trans>{t("listitem_2")}</Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>
                        <Trans>{t("listitem_3")}</Trans>
                    </span>
                </div>
                <div className="blog_textitem">
                    <span>

                        <Trans>{t("listitem_4")}</Trans>
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