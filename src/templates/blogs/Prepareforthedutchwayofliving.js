import React from 'react'
import '../../static/shared.css'
import '../../static/blog.css'
import { withTranslation, Trans } from 'react-i18next';
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'

function renderImages(url) {
    /**
     * Create image container
     */
    console.log()
    const divStyle2 = {
        // color: 'blue',
        backgroundImage: 'url(' + url + ')',
        backgroundSize: 'cover',
        height: '18rem',
        backgroundPosition: "50%",
        boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.3)",
        borderRadius: " 5px",
    };

    return (
        <>
            <div style={divStyle2}></div>
        </>
    )
}

function Prepareforthedutchwayofliving({ t }, props) {
    const blog = blogLoader.get("prepareforthedutchwayofliving")

    const renderedimage_1 = renderImages(blog.secondsource)
    const renderedimage_2 = renderImages("/static/media/glurenbijdeburen.1de7c652.jpg")
    return (
        <>
            <main>
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
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_1")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_2")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_3")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_4")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_5")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_6")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_7")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_8")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_9")}<b></b></Trans>
                        </span>
                    </div>
                    <div className="blog_textitem">
                        <span>
                            <Trans>{t("listitem_10")}<b></b></Trans>
                        </span>
                    </div>

                </section>
                <section>
                    <div className="blog_container">
                        <div className="second_image"></div>
                        {/* <img
                            className="blog_image"
                            src={require("../../static/images/blogs/glurenbijdeburen.jpg")}
                            alt={t("picture_alt_2")} /> */}
                        <span className="italic_style">
                            {t("picture_subtext_2")}
                        </span>
                    </div>
                </section>
            </main>
        </>
    );

}

export default withTranslation(['blog_prepareforthedutchwayofliving', 'common'])(Prepareforthedutchwayofliving);