import React from "react";
import Language from "../../modules/language";

class Section4 extends React.Component{
    render() {
        return(
            <section className="main-sec-4">
                <div className="sec-4-tit">
                    <h2>{Language.sec4MainTit}</h2>
                </div>
                <div className="sec-4-cont">
                    <div className="sec-4-bg"></div>
                    <div className="sec-4-paragraph">
                        <h2>{Language.sec4Tit1}</h2>
                        <p>{Language.sec4par1}</p>
                    </div>
                </div>
                <div className="sec-4-cont">
                    <div className="sec-4-paragraph">
                        <h2>{Language.sec4Tit2}</h2>
                        <p>{Language.sec4par2}</p>
                    </div>
                    <div className="sec-4-bg"></div>
                </div>
                <div className="sec-4-cont">
                    <div className="sec-4-bg"></div>
                    <div className="sec-4-paragraph">
                        <h2>{Language.sec4Tit3}</h2>
                        <p>{Language.sec4par3}</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Section4;