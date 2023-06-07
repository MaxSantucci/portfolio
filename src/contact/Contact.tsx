import React from 'react';
import styleContainer from '../common/style/Container.module.css';
import style from './Contact.module.css';
import {Title} from '../common/title/Title';

export const Contact = () => {
   return (
      <div className={style.contactBlock}>
         <div className={`${styleContainer.container} ${style.contactContainer}`}>
            <Title title="Contact"/>
            <p className={style.description}>I'm considering remote work options</p>
            <form className={style.form}>
               <input className={style.input} placeholder='Your name' type="text" id='name' name='name'/>
               <input className={style.input} placeholder='Your email' type="text" id='email' name='email'/>
               <textarea className={`${style.input} ${style.textarea}`} placeholder="Your message" id="message" name="message"></textarea>
               <button type='submit' className={style.button}>Send message</button>
            </form>
         </div>
      </div>
   );
};
