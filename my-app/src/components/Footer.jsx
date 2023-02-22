
import"./Footer.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import React, { Component } from 'react';

class Footer extends Component {

  constructor(props){
    super(props)


    this.state={
      
    }
  
  }


  render() {
    return (
      <div>
         <footer className='footer'>
        <div className="container">
            <div className="footer__socials">
                <a href="/"className="footer__social"><GitHubIcon /></a>
                <a href="/"className="footer__social"><TwitterIcon /></a>
                <a href="/"className="footer__social"><YouTubeIcon /></a>
            </div>
            <ul className="footer__links">
                <li className="footer__link">lien footer</li>
                <li className="footer__link">lien footer</li>
                <li className="footer__link">lien footer</li>
                <li className="footer__link">lien footer</li>
                
            </ul>
            <div className="footer__copy">tous droits reserves by my-moviz</div>
        </div>
    </footer>
      </div>
    );
  }
}




export default Footer;