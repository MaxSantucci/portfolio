import React from 'react';
import style from './Home.module.css';
import styleContainer from '../common/style/Container.module.css'

export const Home = () => {
    return (
        <div className={style.homeBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <div>HELLO, MY NAME IS</div>
                    <div>MAKSYM MARMURA</div>
                    <div>FRONTEND DEVELOPER</div>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};
