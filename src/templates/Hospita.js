
import React from 'react';
import HospitaForm from './HospitaForm'
// import '../static/shared.css'
import '../static/hospita.css'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import Accordion from "./Accordion";


function Hospita({ t, tReady }) {

    function setHospitaQuestions(block, start, end) {
        var i
        var accordionarray = []
        for (i = start; i < end; i++) {
            accordionarray.push(< Accordion
                key={block.toString() + i.toString()}
                unique={block.toString() + i.toString()}
                title={t("faq.questionblok" + block + "." + i + ".question")}
                content={t("faq.questionblok" + block + "." + i + ".answer")}
            />);

        }
        return accordionarray
    }

    if (!tReady) return <p></p>
    return (
        <>
            <section>
                <div className="banner-hospita banner-otherpages">
                    <h1>
                        <Trans>{t("bannertext")}<span className="colored-text"></span></Trans>
                    </h1>
                </div>
            </section>
            <section>
                <div className="text-container">
                    <span><Trans>{t("exptext")}<br /><br /></Trans>
                    </span>
                </div>
            </section>
            <section>
                <div className="circle__container-big">
                    <div className="text-concept">
                        <div className="main--underline">
                            <h2>{t("concept.title")}
                            </h2>
                        </div>
                    </div>
                    <div className="circle__container">
                        <div className="circle__container--circle">
                            <div className="circle__container--container">
                                <div className="circle">1</div>
                            </div>
                            <div className="circle__text">
                                <span>
                                    <Trans>{t("concept.text1")}<b></b><br /></Trans>
                                </span>
                            </div>
                        </div>
                        <div className="circle__container--circle">
                            <div className="circle__container--container">
                                <div className="circle">2</div>
                            </div>
                            <div className="circle__text">
                                <span>
                                    <Trans>{t("concept.text2")}<b></b><br /></Trans>
                                </span>
                            </div>
                        </div>
                        <div className="circle__container--circle">
                            <div className="circle__container--container">
                                <div className="circle">3</div>
                            </div>
                            <div className="circle__text">
                                <span>
                                    <Trans>{t("concept.text3")}<b></b><br /></Trans>
                                </span>
                            </div>
                        </div>
                        <div className="circle__container--circle">
                            <div className="circle__container--container">
                                <div className="circle">4</div>
                            </div>
                            <div className="circle__text">
                                <span>
                                    <Trans>{t("concept.text4")}<b></b><br /></Trans>
                                </span>
                            </div>
                        </div>
                        <div className="circle__container--circle">
                            <div className="circle__container--container">
                                <div className="circle">5</div>
                            </div>
                            <div className="circle__text">
                                <span>
                                    <Trans>{t("concept.text5")}<b></b><br /></Trans>
                                </span>
                            </div>
                        </div>
                        <div className="circle__container--circle">
                            <div className="circle__container--container">
                                <div className="circle">6</div>
                            </div>
                            <div className="circle__text">
                                <span>
                                    <Trans>{t("concept.text6")}<b></b><br /></Trans>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="main-contactus">
                    <span>
                        {t("contactus")}
                    </span>
                    <Link to="/contact"><button><span>{t("contactusbutton")}</span></button></Link>
                </div>
            </section>
            <section>
                <div className="text-concept">
                    <div className="main--underline">
                        <h2>{t("becomehost_title")}
                        </h2>
                    </div>
                </div>
                <div className="text-container">
                    <span>{t("becomehost_text")}</span>
                </div>
            </section>
            <section>
                <div className="text-concept">
                    <div className="main--underline">
                        <h2>{t("faq.title")}
                        </h2>
                    </div>
                </div>
                <div className="accordion__container">
                    <h3>{t("faq.h3becomehost")}</h3>
                    <Accordion
                        unique={10}
                        title={t("faq.questionblok1.0.question")}
                        content={<Trans>{t("faq.questionblok1.0.answer")}<li></li><li></li><li></li></Trans>}
                    />
                    {setHospitaQuestions(1, 1, 5)}

                    <h3>{t("faq.h3house")}</h3>
                    <Accordion
                        unique={20}
                        title={t("faq.questionblok2.0.question")}
                        content={<Trans>{t("faq.questionblok2.0.answer")}<a href="https://www.rijksoverheid.nl/onderwerpen/huurwoning/vraag-en-antwoord/checklist-kamerverhuur" target="__blank" rel="noopener noreferrer"></a><br /><br /></Trans>}
                    />
                    {setHospitaQuestions(2, 1, 2)}
                    <Accordion
                        unique={23}
                        title={t("faq.questionblok2.3.question")}
                        content={<Trans>{t("faq.questionblok2.3.answer")}<a href="https://pki.utrecht.nl/Loket/prodcat/products/getProductDetailsAction.do?id=809" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={24}
                        title={t("faq.questionblok2.4.question")}
                        content={<Trans>{t("faq.questionblok2.4.answer")}</Trans>}
                    />
                    <Accordion
                        unique={25}
                        title={t("faq.questionblok2.5.question")}
                        content={<Trans>{t("faq.questionblok2.5.answer")}<a href="https://www.rijksoverheid.nl/onderwerpen/huurwoning/vraag-en-antwoord/onderhuur-onderverhuur" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={26}
                        title={t("faq.questionblok2.6.question")}
                        content={<Trans>{t("faq.questionblok2.6.answer")}</Trans>}
                    />
                    <h3>{t("faq.h3contracts")}</h3>
                    <Accordion
                        unique={30}
                        title={t("faq.questionblok3.0.question")}
                        content={<Trans>{t("faq.questionblok3.0.answer")}<Link to="/contact"></Link></Trans>}
                    />
                    <Accordion
                        unique={31}
                        title={t("faq.questionblok3.1.question")}
                        content={<Trans>{t("faq.questionblok3.1.answer")}<a href="https://www.huurcommissie.nl/onderwerpen/huurprijs-en-punten/nieuwe-huurprijscheck/huurprijscheck-onzelfstandige-woonruimte" target="__blank" rel="noopener noreferrer"></a><a href="https://www.rijksoverheid.nl/onderwerpen/huurprijs-en-puntentelling/vraag-en-antwoord/maximale-huurprijs-kamer" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={32}
                        title={t("faq.questionblok3.2.question")}
                        content={<Trans>{t("faq.questionblok3.2.answer")}</Trans>}
                    />
                    <Accordion
                        unique={33}
                        title={t("faq.questionblok3.3.question")}
                        content={<Trans>{t("faq.questionblok3.3.answer")}<a href="https://www.huurcommissie.nl/onderwerpen/huurprijs-en-punten/nieuwe-huurprijscheck/huurprijscheck-onzelfstandige-woonruimte" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />

                    {setHospitaQuestions(3, 4, 8)}
                    <h3>{t("faq.h3taxes")}</h3>
                    <Accordion
                        unique={40}
                        title={t("faq.questionblok4.0.question")}
                        content={<Trans>{t("faq.questionblok4.0.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/woning/eigen_woning/u_hebt_een_woning/verhuur_deel_eigen_woning_kamerverhuurvrijstelling" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={41}
                        title={t("faq.questionblok4.1.question")}
                        content={<Trans>{t("faq.questionblok4.1.answer")}</Trans>}
                    />
                    <Accordion
                        unique={42}
                        title={t("faq.questionblok4.2.question")}
                        content={<Trans>{t("faq.questionblok4.2.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/woning/eigen_woning/u_hebt_een_woning/verhuur_deel_eigen_woning_kamerverhuurvrijstelling" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <h3>{t("faq.h3insurance")}</h3>

                    <Accordion
                        unique={50}
                        title={t("faq.questionblok5.0.question")}
                        content={<Trans>{t("faq.questionblok5.0.answer")}</Trans>}
                    />
                    <Accordion
                        unique={51}
                        title={t("faq.questionblok5.1.question")}
                        content={<Trans>{t("faq.questionblok5.1.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/wijzigingen_doorgeven/welke_wijzigingen_moet_ik_doorgeven/wonen/ik_krijg_een_onderhuurder/" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={52}
                        title={t("faq.questionblok5.2.question")}
                        content={<Trans>{t("faq.questionblok5.2.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/wijzigingen_doorgeven/welke_wijzigingen_moet_ik_doorgeven/wonen/ik_krijg_een_onderhuurder/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/hoe_werken_toeslagen/kan_ik_toeslag_krijgen/partner/partner" target="__blank" rel="noopener noreferrer"></a><a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/huurtoeslag/medebewoner" target="__blank" rel="noopener noreferrer"></a><a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/belastingtelefoon" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={53}
                        title={t("faq.questionblok5.3.question")}
                        content={<Trans>{t("faq.questionblok5.3.answer")}<a href="https://www.svb.nl/nl/aow/alleen-wonen-of-met-1-of-meer-personen/u-woont-met-1-persoon" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={54}
                        title={t("faq.questionblok5.4.question")}
                        content={<Trans>{t("faq.questionblok5.4.answer")}<a href="https://www.uwv.nl/particulieren/werkloos/tijdens-ww-uitkering/" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={55}
                        title={t("faq.questionblok5.5.question")}
                        content={<Trans>{t("faq.questionblok5.5.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/belastingtelefoon" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={56}
                        title={t("faq.questionblok5.6.question")}
                        content={<Trans>{t("faq.questionblok5.6.answer")}</Trans>}
                    />
                    <Accordion
                        unique={57}
                        title={t("faq.questionblok5.7.question")}
                        content={<Trans>{t("faq.questionblok5.7.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/hoe_werken_toeslagen/kan_ik_toeslag_krijgen/partner/mijn-toeslagpartner" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                    <Accordion
                        unique={58}
                        title={t("faq.questionblok5.8.question")}
                        content={<Trans>{t("faq.questionblok5.8.answer")}<a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/contact/content/belastingtelefoon" target="__blank" rel="noopener noreferrer"></a></Trans>}
                    />
                </div>
            </section>
            <section>
                <div className="pagewidth-banner">
                    <span>{t("formbannertext")}<span className="colored-text-banner">.</span>
                    </span>
                </div>
                <HospitaForm />
            </section>
        </>

    );
}

export default withTranslation(['hospita', 'common'])(Hospita);
