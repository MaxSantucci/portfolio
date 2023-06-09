import React from 'react';
import style from './Skill.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type SkillProps = {
   title: string
   description: string
   icon?: IconProp | IconDefinition
   iconColor?: string;
   iconSize?: string;
   bounce?: boolean | undefined
}

export const Skill: React.FC<SkillProps> = ({title, description, icon, iconColor, bounce}) => {
   return (
      <div className={style.skill}>
         <div className={style.container}>
            <div className={style.iconContent}>
               {/*<div className={style.icon}></div>*/}
               <FontAwesomeIcon icon={icon as IconProp} bounce={bounce} color={iconColor} className={style.icon} />
            </div>
            <div className={style.content}>
               <h2 className={style.title}>{title}</h2>
               <p className={style.description}>{description}</p>
            </div>
         </div>
      </div>
   );
};
