import styles from './Skills.module.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import java from '../../assets/java.png'
import angular from '../../assets/angular.png'
import flutter from '../../assets/flutter.png'

function Skills(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Minhas principais habilidades</div>

                <div className={styles.images}>
                    <div className={styles["image-wrapper"]}><img src={html} alt="HTML" /></div>
                    <div className={styles["image-wrapper"]}><img src={css} alt="CSS" /></div>
                    <div className={styles["image-wrapper"]}><img src={js} alt="JS" /></div>
                    <div className={styles["image-wrapper"]}><img src={react} alt="React" /></div>
                    <div className={styles["image-wrapper"]}><img src={java} alt="Java" /></div>
                    <div className={styles["image-wrapper"]}><img src={angular} alt="Angular" /></div>
                    <div className={styles["image-wrapper"]}><img src={flutter} alt="Flutter" /></div>
                </div>
            </div>
        </div>
    )
}   

export default Skills;