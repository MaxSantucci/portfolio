import React from 'react';
import style from './Header.module.scss';
import {Nav} from '../nav/Nav';
import {ContactsBlock} from './ContactsBlock';

export const Header = () => {
   return (
      <header className={style.header}>
         <Nav/>
         <ContactsBlock/>
      </header>
   );
};