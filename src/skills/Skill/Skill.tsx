import React from 'react';
import style from './Skill.module.css';

export const Skill = ({title, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.container}>
                <div className={style.iconContent}>
                    <div className={style.icon}></div>
                </div>
                <div className={style.content}>
                    <h2 className={style.title}>{title}</h2>
                    <div className={style.description}>{description}</div>
                </div>
            </div>
        </div>
    );
};
