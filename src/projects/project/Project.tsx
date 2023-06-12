import React, {useState} from 'react';
import styles from './Project.module.scss';

type ProjectPropsType = {
   style: React.CSSProperties
   title: string
   titleColor?: string
   description?: string
   demo: string
   code: string
}

const Project: React.FC<ProjectPropsType> = ({
                                                style,
                                                title,
                                                titleColor,
                                                description,
                                                demo,
                                                code
                                             }) => {
   const [isVisible, setIsVisible] = useState<boolean>(false)

   const onMouseEnterHandler = () => {
      setIsVisible(true)
   }
   const onMouseLeaveHandler = () => {
      setIsVisible(false)
   }

   const titleStyle = {
      color: isVisible ? 'white' : titleColor
   };

   return (
      <div className={styles.projectContainer}
           onMouseEnter={onMouseEnterHandler}
           onMouseLeave={onMouseLeaveHandler}
      >
         <div className={styles.portfolioProject} style={style}>
            <div className={styles.projectPreview}>
               <div className={styles.content}>
                  <h4 className={styles.projectTitle}
                      style={titleStyle}>{title}</h4>
                  {isVisible &&
                     <p className={styles.projectDescription}> {description} </p>}
                  <div className={styles.buttonLink}>
                     <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.linkDemo}
                     >DEMO</a>
                     <a
                        href={code}
                        target="_blank"
                        rel='noreferrer'
                        className={styles.linkDemo}
                     >CODE</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;


// <div className="Project_projectContainer__BQo1L">
//    <div className="Project_portfolioProject__hTWIj"
//         style="background-image: url(&quot;/portfolio/static/media/SN.c50a2de5ea5c1ea97e44.jpeg&quot;); background-size: cover;">
//       <div className="Project_projectPreview__B67cR">
//          <div className="Project_content__2dPon"><h4 className="Project_projectTitle__UfO5w"> Social network </h4>
//             <div className="Project_buttonLink__RboZ6"><a href="https://olgakapskaya.github.io/Samurai-way/"
//                                                           className="Project_linkDemo__Ztn4f" target="_blank"
//                                                           rel="noreferrer"> DEMO </a><a
//                href="https://github.com/OlgaKapskaya/Samurai-way" className="Project_linkDemo__Ztn4f" target="_blank"
//                rel="noreferrer"> CODE </a></div>
//          </div>
//       </div>
//    </div>
// </div>