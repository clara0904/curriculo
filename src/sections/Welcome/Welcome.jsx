import styles from './Welcome.module.css';
import Profile from '../../assets/profile.jpg';
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Welcome(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Oi, eu sou a Maria Clara</h1>
                    <h4>Técnica em informática e graduanda em Ciência da Computação</h4>

                    <div className={styles.icons}>
                    <a href='https://www.linkedin.com/in/maria-clara-ara%C3%BAjo-089305220/' target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={styles.icon} size={25} color='#FFF'/>
                    </a>
                    
                    <a href='https://github.com/clara0904' target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className={styles.icon} size={27} color='#FFF'/>
                    </a>

                    <a href='https://wa.me/qr/73K6YGR4O3NVO1' target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={styles.icon} size={27} color='#FFF'/>
                    </a>

                    <a href='https://www.instagram.com/claraa.py?igsh=MW51Mm1wbjdxc3hvZA==' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} size={27} color='#FFF'/>
                    </a>
                </div>
                </div>

                <img src={Profile} alt='Profile' className={styles.profile}/>
            </div>
        </div>
    )
}

export default Welcome;