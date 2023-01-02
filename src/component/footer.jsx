import React from "react";
import {Link} from 'react-router-dom'
import Language from "../modules/language";

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <div className="footer-top-box">
                    <div className="footer-soc-box">
                        <Link className="face" to=''></Link>
                        <Link className="inst" to=''></Link>
                    </div>
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
                </div>
                <div className="copyright-box">
                    <p>
                    {Language.copyright}
                    <a href="https://www.facebook.com/Digicode01" target='_blank'>{Language.copyrightLink}</a>
                    </p>
                </div>
            </footer>
        );
    }
}
export default Footer;