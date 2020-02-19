/* eslint-disable */
import React from 'react'
import '../static/students.css'
import Accordion from "./Accordion";
import AccordionTable from "./AccordionTable";
import { HashLink as Link2 } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next';
import StudentForm from './StudentForm'
import S3uploads from './s3uploadinput'


function Students({ t }) {

    function setStudentVragen(block, start, end) {
        var i
        var accordionarray = []
        for (i = start; i < end; i++) {
            // console.log("inside setting" + block + i)
            accordionarray.push(< Accordion
                key={block.toString() + i.toString()}
                unique={block.toString() + i.toString()}
                title={t("faq.questionblok" + block + "." + i + ".question")}
                content={t("faq.questionblok" + block + "." + i + ".answer")}
            />);

        }
        return accordionarray
    }
    // function setStudentVragen(questionblock) {
    //     var i = 0
    //     const items = questionblock.map(item => {
    //         var i = i + 1
    //         console.log(i)
    //         return (< Accordion
    //             key={i}
    //             title={t("faq.questionblok.0.question")}
    //             content={t("faq.questionblok.0.answer")}
    //         />);
    //     });
    //     return items
    // };

    // return questionblock.map((item) => {
    //     // console.log(item["question"]);
    //     var quest = item["question"];
    //     var anws = item["answer"];
    //     // console.log(quest);
    //     <Accordion
    //         title={t("faq.")}
    //         content={t("faq.")}
    //     />
    //     // < Accordion
    //     //     title="hallo"
    //     //     content="bla"
    //     // />
    // });
    // console.log(ding)
    // return ding
    return (
        <main>

            <section>
                <div className="banner-otherpages">
                    <h1><Trans>{t("bannertext")}<span className="colored-text"></span></Trans></h1>
                </div>
            </section>
            <section>
                <div className="text-container">
                    <span><Trans>{t("exptext")}<br /><br /></Trans></span>
                </div>
            </section>
            <section>
                <div className="main-contactus">
                    <span>{t("signuptext")}</span><Link2 to="/students#myForm"><button><span>{t("signupbutton")}</span></button></Link2></div>
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
                <div className="text-concept">
                    <div className="main--underline">
                        <h2>{t("faq.title")}
                        </h2>
                    </div>
                </div>
                <div className="accordion__container">

                    <h3>{t("faq.h3questions")}</h3>
                    <div>
                        {setStudentVragen(1, 0, 6)}
                    </div>
                    <h3>{t("faq.h3matching")}</h3>
                    <div>
                        {setStudentVragen(2, 0, 7)}
                    </div>
                    <h3>{t("faq.h3costs")}</h3>
                    <div>
                        <AccordionTable
                            unique={30}
                            title={t("faq.questionblok3.0.question")}
                            content={<Trans>{t("faq.questionblok3.0.answer")}<br /></Trans>}
                            translate={t}
                        />


                    </div >
                    <h3>{t("faq.h3abouthospi")}</h3>
                    <div>
                        {setStudentVragen(4, 0, 1)}
                        <Accordion
                            unique={42}
                            title={t("faq.questionblok4.1.question")}
                            content={<Trans>{t("faq.questionblok4.1.answer")}<Link to="/contact" ></Link ></Trans>}
                        />
                    </div>
                    <h3>{t("faq.h3other")}</h3>
                    <div>
                        <Accordion
                            unique={50}
                            title={t("faq.questionblok5.0.question")}
                            content={<Trans>{t("faq.questionblok5.0.answer")}<a href="https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students/" target="__blank" rel="noopener noreferrer"></a></Trans>}
                        />

                    </div>
                </div >
            </section >
            <section>
                <div className="pagewidth-banner">
                    <span>
                        <Trans>{t("form.formbanner")} <span className="colored-text-banner"></span></Trans>
                    </span>
                </div>
            </section>

            <section>
                <StudentForm />
            </section>

        </main >
    )
}

export default withTranslation(['students', 'common'])(Students);