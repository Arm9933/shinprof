import React from "react";
import Language from "../../modules/language";
import access1 from '../img/accessories-1.jpg';
import access2 from '../img/accessories-2.jpg';
import access3 from '../img/accessories-3.jpg';
import access4 from '../img/accessories-4.jpg';
import access5 from '../img/accessories-5.jpg';
import access6 from '../img/accessories-6.jpg';

class Section6 extends React.Component{

    param = {
        slide: document.getElementsByClassName('sec-6-slide'),
        flag: 0,
        flag1: 0,
        step: 345,
        step1: -345,
        clientWidt: window.onload.clientWidt,
    }

    next = () => {
        console.log(this.param.clientWidt);
        this.param.flag -= this.param.step;
        this.param.flag1 = this.param.flag / (this.param.slide.length - 3);

        if (this.param.flag1 >= this.param.step1) {
            for (let i = 0; i < this.param.slide.length; i++) {
                this.param.slide[i].style.transform = 'translate3d('+this.param.flag+'px,0,0)';
            }
        }
        if (this.param.flag1 <= this.param.step1) {
            this.param.flag = this.param.step;
            this.param.flag1 = 0;
        }

        
    }

    prev = () => {
        this.param.flag += this.param.step;
        this.param.flag1 = this.param.flag / (this.param.slide.length - 3);

        if(this.param.flag1 <= 0) {
            for (let i = 0; i < this.param.slide.length; i++) {
                this.param.slide[i].style.transform = 'translate3d('+this.param.flag+'px,0,0';
            }
        }
        if (this.param.flag1 > 0) {
            this.param.flag = this.param.step1 * (this.param.slide.length - 3);
            for (let i = 0; i < this.param.slide.length; i++) {
                this.param.slide[i].style.transform = 'translate3d('+this.param.flag+'px,0,0';
            }
        }
    }

    render() {
        return(
            <section className="main-sec-6">
                <div className="sec-6-tit">
                    <h2>{Language.sec6Tit}</h2>
                </div>
                <div className="sec-6-cont">
                    <button onClick={this.prev}></button>
                    <div className="sec-6-slide-box">

                        <div className="sec-6-slide">
                            <div className="sec-6-slide-bg">
                                <img src={access1} alt="" />
                                <div className="sec-6-slide-tit">
                                    <h2>{Language.sec6SlideTit1}</h2>
                                </div>
                            </div>
                            <div className="sec-6-slide-text">
                                <p>{Language.sec6SlidePar1}</p>
                            </div>
                        </div>

                        <div className="sec-6-slide">
                            <div className="sec-6-slide-bg">
                                <img src={access2} alt="" />
                                <div className="sec-6-slide-tit">
                                    <h2>{Language.sec6SlideTit2}</h2>
                                </div>
                            </div>
                            <div className="sec-6-slide-text">
                                <p>{Language.sec6SlidePar2}</p>
                            </div>
                        </div>

                        <div className="sec-6-slide">
                            <div className="sec-6-slide-bg">
                                <img src={access3} alt="" />
                                <div className="sec-6-slide-tit">
                                    <h2>{Language.sec6SlideTit3}</h2>
                                </div>
                            </div>
                            <div className="sec-6-slide-text">
                                <p>{Language.sec6SlidePar3}</p>
                            </div>
                        </div>

                        <div className="sec-6-slide">
                            <div className="sec-6-slide-bg">
                                <img src={access4} alt="" />
                                <div className="sec-6-slide-tit">
                                    <h2>{Language.sec6SlideTit4}</h2>
                                </div>
                            </div>
                            <div className="sec-6-slide-text">
                                <p>{Language.sec6SlidePar4}</p>
                            </div>
                        </div>

                        <div className="sec-6-slide">
                            <div className="sec-6-slide-bg">
                                <img src={access5} alt="" />
                                <div className="sec-6-slide-tit">
                                    <h2>{Language.sec6SlideTit5}</h2>
                                </div>
                            </div>
                            <div className="sec-6-slide-text">
                                <p>{Language.sec6SlidePar5}</p>
                            </div>
                        </div>

                        <div className="sec-6-slide">
                            <div className="sec-6-slide-bg">
                                <img src={access6} alt="" />
                                <div className="sec-6-slide-tit">
                                    <h2>{Language.sec6SlideTit6}</h2>
                                </div>
                            </div>
                            <div className="sec-6-slide-text">
                                <p>{Language.sec6SlidePar6}</p>
                            </div>
                        </div>

                    </div>
                    <button onClick={this.next}></button>
                </div>
            </section>
        );
    }
}
export default Section6;