import styles from './Button.module.css';


function Button({ imagen, texto, onClick, alt }) {
    return (
        <button className={styles.container} onClick={onClick}>
            <img src={imagen} alt={alt} className={styles.icon} />
            <span>{texto}</span>
        </button>
    );
}

export default Button;