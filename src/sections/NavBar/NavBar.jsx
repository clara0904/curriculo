import styles from './NavBar.module.css'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

function NavBar(){
    return(
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <a href='/'>Maria Clara Araújo</a>
                </div>
                <div className={styles.icons}>
                    <a href='https://www.linkedin.com/in/maria-clara-ara%C3%BAjo-089305220/' target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={styles.icon} size={25} color='#FFF'/>
                    </a>
                    
                    <a href='https://github.com/clara0904' target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className={styles.icon} size={27} color='#FFF'/>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar;