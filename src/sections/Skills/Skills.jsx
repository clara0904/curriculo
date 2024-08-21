import styles from './Skills.module.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import java from '../../assets/java.png'

function Skills(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Minhas principais habilidades</div>

                <div className={styles.images}>
                    <img src={html} alt='HTML' className={styles.image}/>
                    <img src={css} alt='CSS' className={styles.image}/>
                    <img src={js} alt='JS' className={styles.image}/>
                    <img src={react} alt='REACT' className={styles.image}/>
                    <img src={java} alt='JAVA' className={styles.image}/>
                </div>
            </div>
        </div>
    )
}   

export default Skills;