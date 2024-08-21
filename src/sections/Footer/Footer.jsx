import styles from './Footer.module.css'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.text}>Maria Clara de Araújo Pereira</div>
                <div className={styles.icons}>
                    <a href='https://www.linkedin.com/in/maria-clara-ara%C3%BAjo-089305220/' target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={styles.icon} size={22} color='#FFF'/>
                    </a>
                    
                    <a href='https://github.com/clara0904' target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className={styles.icon} size={22} color='#FFF'/>
                    </a>

                    <a href='https://wa.me/qr/73K6YGR4O3NVO1' target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={styles.icon} size={22} color='#FFF'/>
                    </a>

                    <a href='https://www.instagram.com/claraa.py?igsh=MW51Mm1wbjdxc3hvZA==' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} size={22} color='#FFF'/>
                    </a>
                </div>

                <div className={styles.text}>Piripiri - PI</div>
            </div>
        </div>
    )
}

export default Footer;