import React, { useState, useRef } from "react";
import { withTranslation, Trans } from 'react-i18next';
import Chevron from "./Chevron";
// import "../static/shared.css";
// import '../static/students.css'

function AccordionTable(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }
    var elements = []
    elements.push(
        <div className="accordion__section" key={props.unique}>
            <button className={`accordion ${setActive}`} onClick={toggleAccordion} >
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <p className="accordion__paragraph">
                    {props.content}
                </p>
                <div>
                    <div>
                        <span className="accordion__studentstable-title">{props.translate("faqtablecost.tabletitle")}</span>
                    </div>
                    <table className="accordion__studentstable">
                        <tbody>
                            <tr>
                                <td className="accordion__studentstable-example"><Trans>{props.translate("faqtablecost.example1_title")}<b></b></Trans></td>
                                <td>{props.translate("faqtablecost.example1_text")}</td>
                            </tr>
                            <tr>
                                <td className="accordion__studentstable-example"><Trans>{props.translate("faqtablecost.example2_title")}<b></b></Trans></td>
                                <td>{props.translate("faqtablecost.example2_text")}</td>
                            </tr>
                            <tr>
                                <td className="accordion__studentstable-example"><Trans>{props.translate("faqtablecost.example3_title")}<b></b></Trans></td>
                                <td>{props.translate("faqtablecost.example3_text")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="accordion__border"></div>
        </div>
    )

    return (
        elements

    );
}

export default withTranslation(['accordion', 'common'])(AccordionTable);