import styles from './ProjectsCard.module.css';
import { checkPropTypes } from 'prop-types';
import { FaArrowRight } from "react-icons/fa";

ProjectsCard.propTypes = {
    title: checkPropTypes.string,
    description: checkPropTypes.string,
    image: checkPropTypes.string,
    link: checkPropTypes.string,
};

function ProjectsCard({title, description, image, link}){
    return(
        <div className={styles.card}>
            <a href={image} target="_blank" rel="noopener noreferrer">
                {image && <img src={image} alt={title} className={styles.profile} />}
            </a>
            
        
            <div className={styles.container}>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardDescription}>{description}</p>
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLinkWrapper}>
                <button className={styles.button}>Acesse o projeto <FaArrowRight className={styles.iconArrow}/></button>
            </a>
        </div>
    )
}

export default ProjectsCard;