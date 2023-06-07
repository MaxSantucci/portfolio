import React from 'react';
import style from '../../common/title/Title.module.css';

type TitlePropsType = {
   title: string
}

export const Title: React.FC<TitlePropsType> = ({title}) => {
   return (
         <h2 className={style.title}>{title}</h2>
   );
};