import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/style/Container.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/title/Title';
import {AiFillHtml5, AiOutlineCloudServer} from 'react-icons/ai';
import {DiCss3, DiJavascript1} from 'react-icons/di';
import {FaGitAlt, FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {VscDebugConsole} from 'react-icons/vsc';


export const Skills = () => {
   return (
      <div className={style.skillsBlock}>
         <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title="Skills"/>
            <div className={style.skills}>
               <Skill
                  logo={<AiFillHtml5 />}
                  title={'HTML'}
                  description={'Fundamentals HTML tags, form and validation, semantic HTML'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<DiCss3/>}
                  title={'CSS'}
                  description={'Positioning, box modal, selectors, flexbox, media queries, transformation & animation'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<DiJavascript1/>}
                  title={'JavaScript/TypeScript'}
                  description={'Data types, basic syntax, functions, promises, scope, event loop, async/await'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<FaReact/>}
                  title={'React'}
                  description={'Class and functional components, state & props, components life-cycle, routing, conditional rendering, HOC'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<SiRedux/>}
                  title={'Redux'}
                  description={'Actions & thunks, reducer, context API, store, flux'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<AiOutlineCloudServer/>}
                  title={'REST API'}
                  description={'HTTPS requests, URI parameters, Query parameters, status codes, axios library'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<FaGitAlt/>}
                  title={'Version Control and Git'}
                  description={'Creating new repositories, push- and pull-requets, merge, repos cloning'}
                  iconColor={'#FF5800'}
               ></Skill>
               <Skill
                  logo={<VscDebugConsole/>}
                  title={'Testing and Debugging'}
                  description={'TDD, Storybook, Unit tests, Snapshot'}
                  iconColor={'#FF5800'}
               ></Skill>
            </div>
         </div>
      </div>
   );
};

