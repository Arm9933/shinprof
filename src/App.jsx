import './App.css';
import './media.css';
import React from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import { Route, Routes } from 'react-router-dom';


class App extends React.Component{

  uppScroll = () => {
    let flag = window.scrollY;
    let interval = setInterval(() => {
      if( flag > 0) {
        flag -= 15;
      }
      if(flag <= 0) {
        clearInterval(interval);
      }
      window.scrollTo(0,flag);
    },0.5)
  }
  langBackClose = () =>  {
    let langBack = document.getElementById('lang-back');
    let openArrow = document.getElementById('open-lang-box');
    let langClose = document.getElementById('lang-close');
    let link = document.querySelectorAll('.lang-link');
    
    langBack.style.display = 'none';
    openArrow.style.transform = 'rotate(0deg)';
    langClose.style.transform = 'scale(0)';
    for(let i=0; i<link.length; i++) {
            link[i].style.transform = 'scale(0)';
    }
  }

  render() {
      return(
        <div>
          <div id='scroll-top' onClick={this.uppScroll}></div>
          <div id='lang-back' onClick={this.langBackClose}></div>
          <Header />
          <Main />
          <Footer />
        </div>
      );
  }
}
export default App;
