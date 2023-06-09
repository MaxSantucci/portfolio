import React from 'react';
import style from './Home.module.scss';
import styleContainer from '../common/style/Container.module.scss'
import avatar from '../assets/image/avatar.jpg'

export const Home = () => {
   return (
      <div className={style.homeBlock}>
         <div className={styleContainer.container}>
            <div className={style.text}>
               <div>HELLO, MY NAME IS</div>
               <div>MAKSYM MARMURA</div>
               <div>FRONTEND DEVELOPER</div>
            </div>
            <img src={avatar} alt="" className={style.photo}/>
         </div>
        </div>
    );
};
