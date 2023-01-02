import React from "react";
import Language from "../../modules/language";

class Section2 extends React.Component{
    render() {
        return(
            <section className="main-sec-2">
                <div className="sec-2-tit">
                    <h2>{Language.sec2Tit}</h2>
                </div>
                <div className="sec-2-cont">
                    <div className="sec-2-text">
                        <div className="sec-2-paragraph">
                            <p>{Language.sec2Par}</p>
                        </div>
                        <div className="sec-2-bg"></div>
                    </div>
                    <div className="sec-2-stat">
                        <div className="sec-2-stat-box">
                            <div className="sec-2-stat-bg"></div>
                            <div className="sec-2-stat-tit">
                                <p>{Language.sec2Stat1}</p>
                            </div>
                        </div>
                        <div className="sec-2-stat-box">
                            <div className="sec-2-stat-bg"></div>
                            <div className="sec-2-stat-tit">
                                <p>{Language.sec2Stat2}</p>
                            </div>
                        </div>
                        <div className="sec-2-stat-box">
                            <div className="sec-2-stat-bg"></div>
                            <div className="sec-2-stat-tit">
                                <p>{Language.sec2Stat3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section2;