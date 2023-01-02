import React from 'react';
import {Link} from 'react-router-dom';
import SetLang from '../modules/setLang';
import Language from '../modules/language';

class Header extends React.Component{
    

    scroll() {
        let scroll = window.addEventListener('scroll', () => {
            let scrollTop = document.getElementById('scroll-top');
            let navbarTop = document.getElementById('nav-top');
            let src = window.pageYOffset;
            let header = document.getElementById('header');
            let logo = document.getElementById('logo-box');
            let navbarBottom = document.getElementById('navbar-bottom');
            let client = document.getElementById('root').clientWidth;

            if(src >= 150) {
                if(client <= 586){
                    navbarTop.style.transform = 'scaleY(0)';
                    navbarBottom.style.bottom = '30px';
                    header.style.height = '60px';
                    logo.style.width = '60px';
                    scrollTop.style.display = 'flex';
                }
                else{
                    navbarTop.style.transform = 'scaleY(0)';
                    navbarBottom.style.bottom = '30px';
                    header.style.height = '80px';
                    logo.style.width = '100px';
                    scrollTop.style.display = 'flex';
                }
            }
            else{
                if(client <= 586){
                    navbarTop.style.transform = 'scaleY(1)';
                    navbarBottom.style.bottom = '0';
                    header.style.height = '80px';
                    logo.style.width = '80px';
                    scrollTop.style.display = 'none';
                }
                else{
                    navbarTop.style.transform = 'scaleY(1)';
                    navbarBottom.style.bottom = '0';
                    header.style.height = '120px';
                    logo.style.width = '120px';
                    scrollTop.style.display = 'none';
                }
            }
        })
    }

    openMenu = () => {
        let nav = document.querySelector('.navbar');
        let closeMenu = document.querySelector('.close-mob-menu');

        nav.style.top = '0';
        closeMenu.style.display = 'flex';
    }
    closeMenu = () => {
        let nav = document.querySelector('.navbar');
        let closeMenu = document.querySelector('.close-mob-menu');

        closeMenu.style.display = 'none';
        nav.style.top = '-160px';
    }

    render() {
        return(
            <header id='header'>
                <div id='logo-box'>
                    <Link to=''></Link>
                </div>
                <nav className='navbar'>
                    <div className='navbar-box' id='nav-top'>
                        <div className='navbar-soc-box'>
                            <button className='button'>
                                <span></span>
                                {Language.callButon}
                            </button>
                            <div className='navbar-soc'>
                                <a href="https://www.facebook.com/shinprof.am/" target='_blank' className='face'></a>
                                <a href="https://www.instagram.com/shinprof.am/" target='_blank' className='inst'></a>
                            </div>
                        </div>
                        <div className='navbar-number-box'>
                            <div className='hours24'></div>
                            <div className='number-box'>
                                <p>{Language.number}</p>
                                <p>{Language.number}</p>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-box' id='navbar-bottom'>
                        <ul>
                            <li>
                                <Link to=''>{Language.menu1}</Link>
                            </li>
                            <li>
                                <Link to=''>{Language.menu2}</Link>
                            </li>
                            <li>
                                <Link to=''>{Language.menu3}</Link>
                            </li>
                        </ul>
                        <SetLang />
                        <div className='close-mob-menu' onClick={this.closeMenu}></div>
                    </div>
                </nav>
                <div id='burger-menu' onClick={this.openMenu}>
                    <span className='burger-line'></span>
                </div>
            </header>
        );
    }
}
export default Header;
let header = new Header();
header.scroll();