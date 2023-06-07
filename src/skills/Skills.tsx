import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/style/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../common/title/Title';

export const Skills = () => {
   return (
      <div className={style.skillsBlock}>
         <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title="Skills"/>
            <div className={style.skills}>
               <Skill
                  title={'HTML'}
                  description={'Fundamentals HTML tags, form and validation, semantic HTML'}/>
               <Skill
                  title={'CSS'}
                  description={'Positioning, box modal, selectors, flexbox, media queries, transformation & animation'}
               />
               <Skill
                  title={'JavaScript/TypeScript'}
                  description={'Data types, basic syntax, functions, promises, scope, event loop, async/await'}
               />
               <Skill
                  title={'React'}
                  description={'Class and functional components, state & props, components life-cycle, routing, conditional rendering, HOC'}
               />
               <Skill
                  title={'Redux'}
                  description={'Actions & thunks, reducer, context API, store, flux'}
               />
               <Skill
                  title={'REST API'}
                  description={'HTTPS requests, URI parameters, Query parameters, status codes, axios library'}
               />
            </div>
         </div>
      </div>
   );
};

