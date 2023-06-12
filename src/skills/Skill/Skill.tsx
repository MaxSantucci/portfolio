import React from 'react';
import style from './Skill.module.scss';

type SkillProps = {
   title: string
   description: string
   logo?: JSX.Element
   iconColor?: string;
   iconSize?: string;
   bounce?: boolean | undefined
}

export const Skill: React.FC<SkillProps> = ({title, description, logo}) => {
   return (
      <div className={style.skill}>
         <div className={style.container}>
            <div className={style.iconContent}>
               {logo}
            </div>
            <div className={style.content}>
               <h2 className={style.title}>{title}</h2>
               <p className={style.description}>{description}</p>
            </div>
         </div>
      </div>
   );
};
