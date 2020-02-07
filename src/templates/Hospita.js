import React from 'react';
import HospitaForm from './HospitaForm'
import '../static/hospita.css'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import Accordion from "./Accordion";
import AccordionList from "./AccordionList"


function Hospita({ t }) {

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


    return (
        <main>
            <section>
                <div className="banner-otherpages">
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


                    <h3>Huurcontract en Huurinkomsten</h3>
                    <p className="accordion">Ik weet niks van huurcontracten, wat nu?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Geen nood, wij hebben dat voor u uitgezocht. Er zijn verschillende typen contracten voor
                              verschillende
                              situaties. Wij adviseren u over het contract dat het beste past bij uw situatie en sturen u
                              altijd een
                              voorbeeld contract mee die u direct kunt gebruiken. Het staat u vrij om er wijzigingen in te
                              maken. Voor
              eventuele vragen over het contract kunt u altijd bij <a href="https://www.hospihousing.com/contact" target="_blank" rel="noopener noreferrer" >ons terecht</a></span>
                        </div>
                    </div>
                    <p className="accordion">Hoe bepaal ik hoeveel huur ik mag vragen?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>U bepaalt zelf de hoogte van de huur. Wel zijn hier bepaalde voorwaarden aan verbonden. De
                              maximale huurprijs
                              van
                              uw kamer wordt bepaald met een puntensysteem. Hoe
                              meer punten, hoe hoger de maximale huurprijs. U kunt zelf het puntenaantal en de
              maximale huurprijs van uw kamer uitrekenen met de <a href="https://www.huurcommissie.nl/onderwerpen/huurprijs-en-punten/nieuwe-huurprijscheck/huurprijscheck-onzelfstandige-woonruimte" target="_blank" rel="noopener noreferrer">huurprijscheck onzelfstandige
                woonruimte</a> van de Huurcommissie. Wilt u meer weten over de berekening van de
              maximale huurprijs van uw kamer, kijk dan op de website van de <a href="https://www.rijksoverheid.nl/onderwerpen/huurprijs-en-puntentelling/vraag-en-antwoord/maximale-huurprijs-kamer" target="_blank" rel="noopener noreferrer">rijksoverheid</a>.</span>
                        </div>
                    </div>
                    <p className="accordion">Hoe ontvang ik de huur?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Hoe de huur geïnd wordt zijn afspraken tussen de hospita en de student. De hoogte van de
                              huur, wanneer de
              huur wordt overgemaakt en op welke manier wordt vastgelegd in het contract.</span>
                        </div>
                    </div>
                    <p className="accordion">Is gas, water en licht onderdeel van de huurprijs?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Bovenop de maximale huurprijs die u kunt uitrekenen met de <a href="https://www.huurcommissie.nl/onderwerpen/huurprijs-en-punten/nieuwe-huurprijscheck/huurprijscheck-onzelfstandige-woonruimte/" target="_blank" rel="noopener noreferrer">huurprijscheck</a> van de Huurcommissie kunt u nog
                              eventuele servicekosten en kosten voor gas, water, elektriciteit en internet meenemen in de
                              huurprijs.
                              Kosten voor eten en drinken zijn niet inbegrepen in de huur. Over het gebruik van
                              huishoudelijke apparaten
                              dient u van tevoren afspraken te maken met de student. Hospi Housing adviseert om €55,-
                              bovenop de kale
                              huurprijs te rekenen, dat is dan inclusief de mogelijke stijging in gemeentelijke
              belastingen.</span>
                        </div>
                    </div>
                    <p className="accordion">Hoe zit het met gemeentelijke belasting?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Als u alleen woont wordt u door de gemeente gezien als eenpersoonshuishouden. Zodra er een
                              student komt te
                              wonen wordt u aangemerkt als meerpersoonshuishouden. Dit kan leiden tot een stijging in
                              gemeentelijke
                              belastingen.. Mocht u al met meer dan een persoon in het huis wonen, dan verandert er niks.
                              Hospi Housing
                              adviseert om €55,- bovenop de kale huurprijs te rekenen, en dat is dan inclusief gas, water
                              en licht. Wilt u
                              precies weten met hoeveel u gemeentelijke belastingen jaarlijks stijgen, neem dan contact op
                              met uw
              gemeente.</span>
                        </div>
                    </div>
                    <p className="accordion">Wat moet ik van te voren aanleveren aan Hospi Housing?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Voordat Hospi Housing u koppelt aan een student, voorziet u ons van een overzicht
                              van de totale huurkosten inclusief eventuele servicekosten en kosten voor gas, water,
              elektriciteit en internet.</span>
                        </div>
                    </div>
                    <p className="accordion">Mag ik de huurprijs tussendoor wijzigen?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>U stelt vooraf de inclusieve huurprijs vast in het contract. U mag niet achteraf extra
                              kosten berekenen aan
                              de
                              student. Hospi Housing ontvangt voorafgaand aan het verblijf een kopie van het
              contract.</span>
                        </div>
                    </div>
                    <p className="accordion">Kan ik de huur zomaar beëindigen?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Dit hangt af van het type huurcontract. Bij een hospita huurcontract mag u zonder opgaaf
                              van reden de huur
                              beëindigen. Zo houdt u controle over wie er bij u in huis woont. Het huurrecht geldt in de
                              eerste negen
                              maanden van de huurperiode niet. Na negen maanden heeft de student wel recht op huurrecht.
                              Let op: ook in de
                              eerste negen maanden geldt een opzegtermijn van 3 maanden. Een huurcontract voor bepaalde
                              termijn kan niet
                              voortijdig door de verhuurder worden beëindigd. Voor de huurder geldt een opzegtermijn van
                              minimaal een en
              maximaal drie maanden.</span>
                        </div>
                    </div>
                    <h3>Belastingvoordeel</h3>
                    <p className="accordion">Wat betekent het belastingvoordeel van € 5.367,-?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Dit is een regeling van de belastingdienst waarmee het aantrekkelijker wordt gemaakt voor
                              eigenaren of
              hoofdhuurders om een of meerdere kamers in uw woning te verhuren. Zie de website van de <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/woning/eigen_woning/u_hebt_een_woning/verhuur_deel_eigen_woning_kamerverhuurvrijstelling" target="_blank" rel="noopener noreferrer">rijksoverheid</a> over wat dit voor u kan betekenen.</span>
                        </div>
                    </div>
                    <p className="accordion">Mag de huur meer dan € 5.367,- zijn?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>Om in aanmerking te komen voor het belastingvoordeel over uw huurinkomsten, mogen de
                              totale huurinkomsten
                              niet hoger zijn dan
                              €5.367,-
                              per jaar (2019). Het gaat om de huur inclusief een
              eventuele vergoeding voor het gebruik van meubilair, energie en dergelijke.</span>
                        </div>
                    </div>
                    <p className="accordion">Waaraan moet u voldoen om aanspraak te maken op het belastingvoordeel?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <ul>
                                <li>Het gedeelte dat u verhuurde, maakte deel uit van uw woning en was geen
                zelfstandige woning.</li>
                                <li>U en de huurder waren tijdens de gehele huurperiode ingeschreven bij de gemeente op
                                  het adres van uw woning. De student heeft een verklaring nodig van de hospita
                                  waarin staat dat de student zich mag inschrijven op het adres van de hospita. Deze
                                  verklaring moet worden ondertekend door de hoofdbewoner en een kopie van het
                                  paspoort moet worden toegevoegd. Dit nemen we mee, of geven we aan
                de student mee als hij/zij aankomt.</li>
                            </ul>
                        </div>
                    </div>
                    <h3>Hoe zit het met mijn verzekering?</h3>
                    <p className="accordion">Ben ik verzekerd bij verhuur van een kamer in mijn woning?</p>
                    <div className="panel">
                        <div className="innerpannel">
                            <span>In de meeste gevallen wel, maar dit hangt van uw verzekering en persoonlijke situatie af.
                              Volgens de meeste
                              polisvoorwaarden ben je verplicht het aan je verzekeraar te laten weten als je een kamer in
                              je woonhuis
                              verhuurt. Dit geldt zowel voor uw inboedel- en opstalverzekering als uw
                              aansprakelijkheidsverzekering. Hospi
                              Housing adviseert daarom om altijd contact op te nemen met uw verzekeraar vóórdat u een
                              contract tekent met
                              de student. Uw eigen verzekeraar kan u het beste adviseren of verhuur van een kamer in uw
                              woning
              consequenties heeft voor uw woon- en aansprakelijkheidsverzekering(en).</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pagewidth-banner">
                    <span>Alvast bedankt voor uw eventuele interesse. Via onderstaande formulier kunt u vrijblijvend meer
          informatie opvragen<span className="colored-text-banner">.</span></span></div>
            </section>
            <section>
                <HospitaForm />
            </section>

        </main>
    );
}
// export default Hospita;
export default withTranslation(['hospita', 'common'])(Hospita);
// export default Hospita;