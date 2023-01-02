import React from "react";
import { Link } from "react-router-dom";
import https from "./setHref";

let fl = '';
let mainLang = document.getElementById('main-lang');

if(window.location.href == https || window.location.href == https+'am/') { 
    fl = 'am-lang';   
}
else if(window.location.href == https+'ru/') {  
    fl = 'rus-lang';
}   
else if(window.location.href == https+'eng/') {
    fl = 'eng-lang';
}
else {
    mainLang.setAttribute('class','am-lang');   
}

window.onload = () => {
 
}

class SetLang extends React.Component{
    langBox = () => {
        let langBack = document.getElementById('lang-back');
        let lang1 = document.getElementById('lang-box').setAttribute('open','');
        let link = document.querySelectorAll('.lang-link');
        let lang = document.getElementById('lang-box').hasAttribute('open');
        let openArrow = document.getElementById('open-lang-box');
        let langClose = document.getElementById('lang-close');

        if(lang == true) {
            langBack.style.display = 'flex';
            openArrow.style.transform = 'rotate(90deg)';
            langClose.style.transform = 'scale(1)';
            for(let i=0; i<link.length; i++) {
                link[i].style.transform = 'scale(1)';
            }
            
        }if(lang == false) {
            langBack.style.display = 'none';
            langClose.style.transform = 'scale(0)';
            openArrow.style.transform = 'rotate(0deg)';
            for(let i=0; i<link.length; i++) {
                link[i].style.transform = 'scale(0)';
            }
        }
    }
    langBoxClose = () => {
        let openArrow = document.getElementById('open-lang-box');
        let langClose = document.getElementById('lang-close');
        let link = document.querySelectorAll('.lang-link');
        let lang = document.getElementById('lang-box').removeAttribute('open');
        let langBack = document.getElementById('lang-back');

        langBack.style.display = 'none';
        openArrow.style.transform = 'rotate(0deg)';
        langClose.style.transform = 'scale(0)';
        for(let i=0; i<link.length; i++) {
            link[i].style.transform = 'scale(0)';
        }
    }
    

    amLang = () => {
        if(window.location.href == https || window.location.href == https+'ru/' || window.location.href == https+'eng/') {
            window.location = https+'am/';
        }
        else {
            window.location.reload();
        }
    }

    ruLang = () => {
        if(window.location.href == https || window.location.href == https+'am/' || window.location.href == https+'eng/') {
            window.location = https+'ru/';
        }
        else {
            window.location.reload();
        }
    }

    engLang = () => { 
        if(window.location.href == https || window.location.href == https+'am/' || window.location.href == https+'ru/') {
            window.location = https+'eng/';
        }
        else {
            window.location.reload();
        }
    }
 
    render() {
        return(
            <div className="lang-box" id="lang-box">
                <div id="lang-close" onClick={this.langBoxClose}>

                </div>
                <div id='lang' onClick={this.langBox}>
                    <span id='open-lang-box'></span>
                    <span className={fl} id="main-lang"></span>  
                </div>
                <Link to='' className="lang-link">
                    <span className='am-lang language' id='am' onClick={this.amLang}></span>
                </Link>
                <Link to='' className="lang-link">
                    <span className='rus-lang language' id='rus' onClick={this.ruLang}></span>
                </Link>
                <Link to='' className="lang-link">
                    <span className='eng-lang language' id='eng' onClick={this.engLang}></span>
                </Link>
            </div>
        )
    }
}
export default SetLang;