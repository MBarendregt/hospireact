import React from 'react'
import './static/main.css'
import './static/shared.css'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';


function MainPage({ t }) {
    return (
        <main>
            <section id="main-banner" className="frontpage_banner">
                <h1 className="">{t('banner.bannertitle')}<span className="colored-text">.</span></h1>
                <div className="main-banner__buttons">

                    <Link className="main-banner__buttons--link" to="/students"><button><span>
                        {t('header:zoekkamer')}</span></button></Link>
                    <Link className="main-banner__buttons--link" to="/hospita"><button><span>{t('header:wordhospita')}</span></button></Link>
                </div>
            </section>
            <section id="main-concept">
                <div className="main-concept__top">
                    <div className="main--underline">
                        <h2>{t('concept.concept')}
                        </h2>
                    </div>
                    <span>
                        <Trans i18nKey="concept.conceptexp">
                            {t("concept.conceptexp")}<br></br>
                        </Trans>
                    </span>
                </div>
                <div className="main-concept__bottom item1">
                    <div className="main--underline">
                        <h2>{t("concept.find")}
                        </h2>
                    </div><span>{t("concept.findexp")} </span>
                </div>
                <div className="main-concept__bottom item2">
                    <div className="main--underline">
                        <h2>{t("concept.match")}
                        </h2>
                    </div><span>{t("concept.matchexp")}</span>
                </div>
                <div className="main-concept__bottom item3">
                    <div className="main--underline">
                        <h2>{t("concept.meet")}
                        </h2>
                    </div>
                    <span>{t("concept.meetexp")}</span>
                </div>
            </section>
            <section>
                <div className="main-contactus">
                    <span>{t("middlebanner.bannertext")}</span><Link to="/contact"><button><span>{t("middlebanner.buttontext")}</span></button></Link></div>
            </section>
            <section>
                <div className="main-aboutus">
                    <div className="main--underline">
                        <h2>{t("abouthospi.title")}
                        </h2>
                    </div>
                    <span> <Trans i18nKey="abouthospi.text">
                        {t("abouthospi.text")}<br></br><br></br><br></br><br></br><br></br>
                    </Trans>
                    </span>
                </div>
            </section>
            <section>
                <div className="main-linkedin__container">
                    <div className="main-linkedin__container__sub">
                        <div className="main-linkedin__photos-container">
                            <h2>{t("aboutus.mauritstitle")}</h2>
                            <div className="main--underline" />
                            <span className="maurits__text">
                                {t("aboutus.mauritsabout")}</span>
                            <img src={require("./static/images/maurits_bridge.jpg")} alt="Maurits on bridge" className="main-linkedin__photos-image" />
                            <a href="https://www.linkedin.com/in/mauritsbarendregt/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/linkedinlogo-white.png")} alt="Logo linkedin" className="main-linkedin__photos-logo" /></a>
                        </div>
                    </div>
                    <div className="main-linkedin__container__sub">
                        <div className="main-linkedin__photos-container">
                            <h2>{t("aboutus.joosttitle")}</h2>
                            <div className="main--underline" />
                            <span className="joost__text">
                                {t("aboutus.joostabout")}</span>
                            <img src={require("./static/images/joost_bridge.jpg")} alt="Joost on bridge" className="main-linkedin__photos-image" />
                            <a href="https://www.linkedin.com/in/joost-bokkers/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/linkedinlogo-white.png")} alt="Logo linkedin" className="main-linkedin__photos-logo" /></a>
                        </div>
                    </div>
                    <div className="main-linkedin__container__sub">
                        <div className="main-linkedin__photos-container">
                            <h2>{t("aboutus.daantitle")}</h2>
                            <div className="main--underline" />
                            <span className="daan__text">
                                {t("aboutus.joostabout")}</span>
                            <img src={require("./static/images/daan_bridge.jpg")} alt="Daan on bridge" className="main-linkedin__photos-image" />
                            <a href="https://www.linkedin.com/in/daandonkers/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/linkedinlogo-white.png")} alt="Logo linkedin" className="main-linkedin__photos-logo" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="align_center">
                    <div className="main--underline">
                        <h2>{t("partners.title")}
                        </h2>
                    </div>
                </div>
                <div className="align_center">
                    <div className="gallery">
                        <div className="gallery__container">
                            <a href="https://esn-utrecht.nl/" target="__blank" rel="noopener noreferrer">
                                <img src={require("./static/images/ESN-Utrecht-full-colour-nobackground.png")} alt="Logo International Exchange erasmus student network" className="gallery__img" />
                            </a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://vidius.nl/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/13 - Logo VIDIUS - 2018 zonder achtergrond.png")} alt="Logo Vidius Studentenuni. Voor iedereen die in Utrecht Studeert" className="gallery__img" /></a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://buddygodutch.nl/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/logo-cyaan-buddygodutch-1.v2 1900x1473.png")} alt="Logo Buddygodutch. Helpt internationale studenten met het ontmoeten van Nederlandse mensen" className="gallery__img" /></a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://www.hu.nl/" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/hu.png")} alt="Logo Hogeschool van Utrecht" className="gallery__img" /></a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://www.kluppen.nl" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/Klup-logo-tekst-1500x1500.jpg")} alt="Logo Klup. Helpt ouderen met het vinden van leuke activiteiten" className="gallery__img kluppen_specific" /></a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://www.hku.nl" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/hku-bigger.png")} alt="Logo Hogeschool van de kunsten Utrecht" className="gallery__img" /></a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://www.utrecht.nl/" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/GU_logo_rood_rgb.jpg")} alt="Logo Gemeente Utrecht" className="gallery__img" /></a>
                        </div>
                        <div className="gallery__container">
                            <a href="https://www.uu.nl" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/UU_logo_NL_CMYK.png")} alt="Logo Universiteit Utrecht" className="gallery__img" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="align_center">
                    <div className="main--underline">
                        <h2>{t("knowus.title")}
                        </h2>
                    </div>
                </div>
                <div className="align_center">
                    <div className="articles">
                        <div className="article__container">
                            <div className="article__imgcontainer">
                                <a href="https://www.duic.nl/algemeen/kamernood-de-ouderwetse-hospita-is-terug-in-utrecht/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/duiclogo.png")} alt="Logo De Utrechtse Internet Courant" className="article__img" />
                                </a>
                            </div>
                            <div className="article__text">
                                <span className="article__item--text">
                                    <Trans i18nKey="knowus.duictext">
                                        {t("knowus.duictext")}<b></b><br></br>
                                    </Trans>
                                </span>
                            </div>
                        </div>
                        <div className="article__container">
                            <div className="article__imgcontainer">
                                <a href="https://www.ad.nl/utrecht/hoe-de-ouderwetse-hospita-de-hopeloze-utrechtse-student-aan-onderdak-helpt~a9207d66/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/algemeen-dagblad-logo-B1C41A55A6-seeklogo.com.png")} alt="Logo Algemeen Dagblad" className="article__img adspecific" /></a>
                            </div>
                            <div className="article__text">
                                <span className="article__item--text">
                                    <Trans i18nKey="knowus.adtext">
                                        {t("knowus.adtext")}<b></b><br></br>
                                    </Trans></span>
                            </div>
                        </div>
                        <div className="article__container">
                            <div className="article__imgcontainer">
                                <a href="https://www.rtvutrecht.nl/nieuws/1962678/nieuwe-hoop-voor-buitenlandse-studenten-om-kamer-te-vinden-in-utrecht-via-hospes.html/" target="__blank" rel="noopener noreferrer"><img src={require("./static/images/rtvutrecht.png")} alt="Logo Regio Televisie Utrecht." className="article__img" /></a>
                            </div>
                            <div className="article__text">
                                <span className="article__item--text">
                                    <Trans i18nKey="knowus.rtvtext">
                                        {t("knowus.rtvtext")}<b></b><br></br>
                                    </Trans>
                                </span>
                            </div>
                        </div>
                        <div className="article__container">
                            <div className="article__imgcontainer">
                                <a href="https://www.dub.uu.nl/nl/nieuws/utrechtse-studenten-blazen-hospita-nieuw-leven-%E2%80%98we-matchen-vraag-en-aanbod%E2%80%99" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/logodub.png")} alt="Logo DUB Utrecht" className="article__img" /></a>
                            </div>
                            <div className="article__text">
                                <span className="article__item--text">
                                    <Trans i18nKey="knowus.dubtext">
                                        {t("knowus.dubtext")}<b></b><br></br>
                                    </Trans>
                                </span>
                            </div>
                        </div>
                        <div className="article__container">
                            <div className="article__imgcontainer">
                                <a href="https://www.nuffic.nl/actueel/hospita-neemt-het-op-tegen-huisjesmelker/" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/nufficlogo.png")} alt="Logo Nuffic" className="article__img" /></a>
                            </div>
                            <div className="article__text">
                                <span className="article__item--text">
                                    <Trans i18nKey="knowus.nuffictext">
                                        {t("knowus.nuffictext")}<b></b><br></br>
                                    </Trans>
                                </span>
                            </div>
                        </div>
                        <div className="article__container">
                            <div className="article__imgcontainer">
                                <a href="https://indebuurt.nl/utrecht/studenten/internationale-student-en-ning-leow-woont-noodgedwongen-bij-een-hospita~111891/" target="__blank" rel="noopener noreferrer"> <img src={require("./static/images/logo-padingless@2x.png")} alt="Logo in de buurt Utrecht." className="article__img" /></a>
                            </div>
                            <div className="article__text">
                                <span className="article__item--text">
                                    <Trans i18nKey="knowus.indebuurttext">
                                        {t("knowus.indebuurttext")}<b></b><br></br>
                                    </Trans>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default withTranslation(['mainpage', 'header'])(MainPage);