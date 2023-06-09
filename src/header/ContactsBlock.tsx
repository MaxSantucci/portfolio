import React from 'react';
import style from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';


export const ContactsBlock = () => {
   return (
      <div className={style.block}>

         <a href="">
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#ffffff",}} />
         </a>
         <a href="">
            <FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#ffffff",}} />
         </a>
         <a href="">
            <FontAwesomeIcon icon={faTelegram} size='lg' style={{color: "#ffffff",}} />
         </a>
         <a href="">
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#ffffff",}} />
         </a>
      </div>
   );
};
