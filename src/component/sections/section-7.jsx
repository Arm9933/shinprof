import React from "react";
import Language from "../../modules/language";

class Section7 extends React.Component{
    render() {
        return(
            <section className="main-sec-7">
                <div className="sec-7-tit">
                    <h2>{Language.sec7MainTit}</h2>
                </div>
                <div className="sec-7-cont">
                    <div className="sec-7-cont-box">
                        <div className="sec-7-content">
                            <div className="sec-7-bg"></div>
                            <div className="sec-7-tit-box">
                                <h2>{Language.sec7Tit1}</h2>
                                <p>{Language.sec7Par1}</p>
                            </div>
                        </div>
                        <div className="sec-7-content">
                            <div className="sec-7-bg"></div>
                            <div className="sec-7-tit-box">
                                <h2>{Language.sec7Tit2}</h2>
                                <p>{Language.sec7Par2}</p>
                            </div>
                        </div>
                        <div className="sec-7-content">
                            <div className="sec-7-bg"></div>
                            <div className="sec-7-tit-box">
                                <h2>{Language.sec7Tit3}</h2>
                                <p>{Language.sec7Par3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="sec-7-cont-box">
                        <div className="sec-7-content">
                            <div className="sec-7-bg"></div>
                            <div className="sec-7-tit-box">
                                <h2>{Language.sec7Tit4}</h2>
                                <p>{Language.sec7Par4}</p>
                            </div>
                        </div>
                        <div className="sec-7-content">
                            <div className="sec-7-bg"></div>
                            <div className="sec-7-tit-box">
                                <h2>{Language.sec7Tit5}</h2>
                                <p>{Language.sec7Par5}</p>
                            </div>
                        </div>
                        <div className="sec-7-content">
                            <div className="sec-7-bg"></div>
                            <div className="sec-7-tit-box">
                                <h2>{Language.sec7Tit6}</h2>
                                <p>{Language.sec7Par6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section7;