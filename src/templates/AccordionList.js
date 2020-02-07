import React, { useState, useRef } from "react";
import { withTranslation } from 'react-i18next';
import Chevron from "./Chevron";
import "../static/shared.css";

function AccordionList(props) {

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
                key={props.unique}
            >
                <div dangerouslySetInnerHTML={{ __html: props.content }}>

                    {/* {props.content} */}
                </div>
            </div >
            <div className="accordion__border"></div>
        </div >

    )
    return (
        <div className="accordion__section" key={props.unique}>
            <button className={`accordion ${setActive}`} onClick={toggleAccordion} >
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
                key={props.unique}
            >
                <div dangerouslySetInnerHTML={{ __html: props.content }}>

                    {/* {props.content} */}
                </div>
            </div >
            <div className="accordion__border"></div>
        </div >
    );
}

export default withTranslation(['accordion', 'common'])(AccordionList);
            // return (
    //     <div className="accordion__section">
    //         <button className={`accordion ${setActive}`} onClick={toggleAccordion} >
    //             <p className="accordion__title">{props.title}</p>
    //             <Chevron className={`${setRotate}`} fill={"#777"} />
    //         </button>
    //         <div
    //             ref={content}
    //             style={{ maxHeight: `${setHeight}` }}
    //             className="accordion__content"
    //         >
    //             <div
    //                 className="accordion__text"
    //                 dangerouslySetInnerHTML={{ __html: props.content }}
    //             />
    //         </div>
    //         <div className="accordion__border"></div>
    //     </div>

    // );
// }

// export default withTranslation(['accordion', 'common'])(Accordion);