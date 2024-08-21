import styles from './TextCard.module.css';
import { checkPropTypes } from 'prop-types';

TextCard.propTypes = {
    title: checkPropTypes.string,
    description: checkPropTypes.string,
    college: checkPropTypes.string,
};

function TextCard({title, description, college}){
    return(
        <div className={styles.card}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.college}>Por: {college}</p>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    )
}

export default TextCard;