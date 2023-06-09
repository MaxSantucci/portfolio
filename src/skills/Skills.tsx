import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/style/Container.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/title/Title';
import {faReact} from '@fortawesome/free-brands-svg-icons'

export const Skills = () => {
   return (
      <div className={style.skillsBlock}>
         <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title="Skills"/>
            <div className={style.skills}>
               {/*<FontAwesomeIcon icon={faReact} bounce style={{color: "#edda07",}} />*/}
               <Skill
                  title={'HTML'}
                  description={'Fundamentals HTML tags, form and validation, semantic HTML'}
                  icon={faReact}
                  iconColor={'#edda07'}
                  bounce={true}
               />
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

