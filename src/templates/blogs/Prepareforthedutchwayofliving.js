import React from 'react'
import '../../static/shared.css'
import '../../static/blog.css'
import { withTranslation, Trans } from 'react-i18next';
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'

function Prepareforthedutchwayofliving({ t, tReady }) {
    if (!tReady) return <p></p>
    const blog = blogLoader.get("prepareforthedutchwayofliving")

    const renderedimage_1 = RenderImages(blog.secondsource)
    const renderedimage_2 = RenderImages("/static/media/glurenbijdeburen.1de7c652.jpg")
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
                    {/* <div >
                            <img className="blog_image" src={blog.secondsource} alt={t("picture_alt")} />
                        </div> */}
                    <span className="italic_style">
                        <Trans>{t("picture_subtext")}</Trans>
                    </span>
                </div>
            </section>
            <section>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_1")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_2")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_3")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_4")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_5")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_6")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_7")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_8")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_9")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_10")}<b></b></Trans>
                    </span>
                </div>

            </section>
            <section>
                <div className="blog_container">
                    {renderedimage_2}
                    <span className="italic_style">
                        {t("picture_subtext_2")}
                    </span>
                </div>
            </section>
        </>
    );

}

export default withTranslation(['blog_prepareforthedutchwayofliving', 'common'])(Prepareforthedutchwayofliving);