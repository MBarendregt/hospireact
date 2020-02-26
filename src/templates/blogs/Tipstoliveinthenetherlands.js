import React from 'react'
import '../../static/shared.css'
import '../../static/blog.css'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import blogLoader from '../blogs'
import BackToAllBlogs from './backtoallblogs'
import RenderImages from './RenderImages'

// function renderImages(url) {
//     /**
//      * Create image container
//      */
//     const divStyle2 = {
//         // color: 'blue',
//         backgroundImage: 'url(' + url + ')',
//         backgroundSize: 'cover',
//         height: '18rem',
//         backgroundPosition: "50%",
//         boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.3)",
//         borderRadius: " 5px",
//     };

//     return (
//         <>
//             <div style={divStyle2}></div>
//         </>
//     )
// }

function Tipstoliveinthenetherlands({ t }) {
    const blog = blogLoader.get("tipstoliveinthenetherlands")

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

                        <Trans>{t("intro_text")}</Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_1")}<b></b><a href="http://www.ishau.nl/housing/" target="__blank" rel="noopener noreferrer"></a><Link to="/students"></Link><a href="https://vidius.nl/en/legal-assistance/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>

                        <Trans>{t("listitem_2")}<b></b><a href="https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.utrecht.nl/city-of-utrecht/registration-procedure-for-non-residents-of-the-netherlands/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_3")}<b></b><a href="https://www.iamexpat.nl/expat-info/insurances-netherlands/dutch-health-insurance-international-students" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>

                        <Trans>{t("listitem_4")}<b></b><a href="http://www.eurogates.nl/how-open-student-bank-account-netherlands/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_5")}<b></b><a href="https://swapfiets.nl/en/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.ov-chipkaart.nl/everything-about-travelling/different-types-of-passenger/students.htm" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_6")}<b></b></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_7")}<b></b><a href="https://www.uu.nl/en/education/exchange-and-visiting-students/contact/uu-international-office" target="__blank" rel="noopener noreferrer"></a><a href="https://students.uu.nl/en/contact/faculty-student-desks" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>

                        <Trans>{t("listitem_8")}<b></b><a href="https://9292.nl/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.ns.nl/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.buienradar.nl/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.buienalarm.nl/" target="__blank" rel="noopener noreferrer"></a><a href="https://nl-nl.duolingo.com/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.iamexpat.nl/expat-info/official-issues/banking-in-the-netherlands" target="__blank" rel="noopener noreferrer"></a><a href="https://students.uu.nl/myuu-app" target="__blank" rel="noopener noreferrer"></a><a href="https://husite.nl/digitalehu2/digitale-leeromgeving-dlo/myhu/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.marktplaats.nl/" target="__blank" rel="noopener noreferrer"></a><a href="https://allekringloopwinkels.nl/utrecht/utrecht" target="__blank" rel="noopener noreferrer"></a><a href="https://www.bol.com/nl/" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_9")}<b></b><a href="https://www.visit-utrecht.com/event-calendar" target="__blank" rel="noopener noreferrer"></a></Trans>
                    </span>
                </div>
                <div className="blog_textlist">
                    <span>
                        <Trans>{t("listitem_10")}<b></b></Trans>
                    </span>
                </div>

            </section>
        </>
    );

}

export default withTranslation(['blog_tipstoliveinthenetherlands', 'common'])(Tipstoliveinthenetherlands);