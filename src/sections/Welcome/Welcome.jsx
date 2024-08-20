import styles from './Welcome.module.css';
import Profile from '../../assets/profile.jpg';

function Welcome(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Olá, eu sou a Maria Clara</h1>
                    <h4>Técnica em informática e graduanda
                        em Ciência da Computação
                    </h4>
                </div>

                <img src={Profile} alt='Profile' className={styles.profile}/>
            </div>
        </div>
    )
}

export default Welcome;