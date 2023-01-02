import React from "react";
import Language from "../../modules/language";

class Section5 extends React.Component{
    render() {
        return(
            <section className="main-sec-5">
                <div className="sec-5-tit">
                    <h2>{Language.sec5MainTit}</h2>
                </div>
                <div className="sec-5-cont">

                    <div className="sec-5-left">
                        <div className="sec-5-left-box">
                            <div className="sec-5-left-bg"></div>
                            <div className="sec-5-left-tit">
                                <p>{Language.sec5StatPar1}</p>
                                <h2>{Language.sec5StatTit1}</h2>
                            </div>
                        </div>
                        <div className="sec-5-left-box">
                            <div className="sec-5-left-bg"></div>
                            <div className="sec-5-left-tit">
                                <p>{Language.sec5StatPar2}</p>
                                <h2>{Language.sec5StatTit2}</h2>
                            </div>
                        </div>
                        <div className="sec-5-left-box">
                            <div className="sec-5-left-bg"></div>
                            <div className="sec-5-left-tit">
                                <p>{Language.sec5StatPar3}</p>
                                <h2>{Language.sec5StatTit3}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="sec-5-right">
                        <h2>{Language.sec5ContTit}</h2>
                        <p>
                            <span></span>
                            {Language.sec5ContNum1}
                        </p>
                        <p>
                            <span></span>
                            {Language.sec5ContNum2}
                        </p>
                        <button className="button">{Language.sec5CallBut}</button>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section5;