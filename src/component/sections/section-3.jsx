import React from "react";
import Language from "../../modules/language";

class Section3 extends React.Component{
    render() {
        return(
            <section className="main-sec-3">
                <div className="sec-3-paragraph">
                    <h2>{Language.sec3Tit}</h2>
                    <p>{Language.sec3Par}<strong>{Language.sec3ParStr}</strong></p>
                </div>
            </section>
        );
    }
}
export default Section3;