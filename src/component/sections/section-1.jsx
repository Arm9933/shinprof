import React from "react";
import slide1 from '../img/slide_1.jpg';
import slide11 from '../img/slide_1_1.jpg';
import slide2 from '../img/slide_2.jpg';
import slide21 from '../img/slide_2_1.jpg';
import Language from "../../modules/language";

class Section1 extends React.Component{
    render() {
        return(
            <section className="main-sec-1">
                <Slider />
                <div className="slide-text">
                    <marquee>
                        <h2>{Language.marquee}</h2>
                    </marquee>
                </div>
            </section>
        );
    }
}
export default Section1; 

class Slider extends React.Component {
    param = {
        slide: document.getElementsByClassName('slider'),
        flag: 0,
        flag1: 0,
    }

    next = () => {
        
        let step = document.getElementById('root').clientWidth;

        if(step >= 568) {
            step = document.getElementById('root').clientWidth - 50;
        }else{
            step = document.getElementById('root').clientWidth;
        }

        this.param.flag -= step;
        this.param.flag1 = this.param.flag / (this.param.slide.length - 1);

        if(this.param.flag1 >= '-'+step) {
            for(let i = 0; i < this.param.slide.length; i++){
                this.param.slide[i].style.transform = 'translate3d('+ this.param.flag +'px,0,0';
            }
        }
        if(this.param.flag1 <= -step) {
            this.param.flag = step;
        }
    }

    prev = () => {
        let step = document.getElementById('root').clientWidth;

        if(step >= 568) {
            step = document.getElementById('root').clientWidth - 50;
        }else{
            step = document.getElementById('root').clientWidth;
        }

        this.param.flag += step;
        this.param.flag1 = this.param.flag / (this.param.slide.length - 1);

        if(this.param.flag1 <= 0) {
            for(let i = 0; i < this.param.slide.length; i++){
                this.param.slide[i].style.transform = 'translate3d('+ this.param.flag +'px,0,0';
            }
        }if(this.param.flag1 > 0){
            this.param.flag = -step * (this.param.slide.length - 1);
            this.param.flag1 = this.param.flag / (this.param.slide.length - 1);
            for(let i = 0; i < this.param.slide.length; i++){
                this.param.slide[i].style.transform = 'translate3d('+ this.param.flag +'px,0,0';
            }
        }
    }

    render() {
        return(
           <div className="slide-box">
                <button onClick={this.prev}></button>
                <div className="slider">
                    <div className="slide-left-bg">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="slide-right-bg">
                        <img src={slide11} alt="" />
                    </div>
                </div>

                <div className="slider">
                    <div className="slide-left-bg">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="slide-right-bg">
                        <img src={slide21} alt="" />
                    </div>
                </div>

                <div className="slider">
                    <div className="slide-left-bg">
                        <img src={slide2} alt="" />
                    </div>
                    <div className="slide-right-bg">
                        <img src={slide21} alt="" />
                    </div>
                </div>
                <button onClick={this.next}></button>
            </div>
        );
    }
}