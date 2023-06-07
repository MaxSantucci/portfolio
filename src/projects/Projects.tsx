import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/style/Container.module.css';
import {Title} from '../common/title/Title';
import Project from './project/Project';
import pizzaImage from '../assets/image/pizza.webp'
import todoImage from '../assets/image/to-do_list.png'
import socialImage from '../assets/image/social_network.jpg'

export const Projects = () => {
   const imagePizza = {
      backgroundImage: `url(${pizzaImage})`,
      backgroundSize: "cover",
      backgroundPosition: 'center',
      opacity: '0.9'
   };

   const imageTodo = {
      backgroundImage: `url(${todoImage})`,
      backgroundSize: "cover",
      backgroundPosition: 'left',
      opacity: '0.9',
      color: "black"
   };

   const imageSocial = {
      backgroundImage: `url(${socialImage})`,
      display: 'flex',
      backgroundSize: "cover",
      backgroundPosition: 'center',
      opacity: '0.9'
   };

   return (
      <div className={style.projectsBlock}>
         <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <Title title="Projects"/>
            <div className={style.content}>
               <Project style={imagePizza} title='Pizza'/>
               <Project style={imageTodo} title='Todolist' titleColor='black'/>
               <Project style={imageSocial} title='Social network'/>
            </div>
         </div>
      </div>
   );
};
