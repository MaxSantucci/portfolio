import React from 'react';
import style from './Nav.module.css';
import {NavLink} from 'react-router-dom';

interface NavData {
   isActive: boolean;
}

export const Nav = () => {
   const setClass =  ({ isActive }: NavData): string => isActive ? style.activeLink : style.item

    return (
        <div className={style.desktop}>
           <nav className={style.nav}>
              <NavLink to="/home" className={setClass}>Home</NavLink>
              <NavLink to="/skills" className={setClass}>Skills</NavLink>
              <NavLink to="/projects" className={setClass}>Projects</NavLink>
              <NavLink to="/contact" className={setClass}>Contact</NavLink>
           </nav>
        </div>
    );
};
