import React from 'react';
import style from './Header.module.scss';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';


export const ContactsBlock = () => {
   return (
      <div className={style.block}>
         <a
            target="_blank"
            href="https://www.linkedin.com/in/maksym-marmura/"
            rel="noreferrer"
         >
            <AiFillLinkedin className={style.icon}/>
         </a>
         <a
            href="https://github.com/MaxSantucci"
            target="_blank"
            rel="noreferrer"
         >
            <AiFillGithub className={style.icon}/>
         </a>
         <a
            href="https://t.me/azovskiy_maks"
            target="_blank"
            rel="noreferrer"
         >
            <FaTelegramPlane className={style.icon}/>
         </a>
         <NavLink to="/contact">
            <AiOutlineMail className={style.icon}/>
         </NavLink>
      </div>
   );
};
