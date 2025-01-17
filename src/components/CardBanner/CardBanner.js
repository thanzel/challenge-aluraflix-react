import { Link } from 'react-router-dom';
import styles from './CardBanner.module.css';

function CardBanner({ video }) {
    const { id, titulo, categoria, imagen, descripcion } = video;

    return (
        <div className={styles.container}>

            {/* Texto a la izquierda */}
            <div className={styles.wrapper}>
                <h3 className={styles.categoriaTitulo}>{categoria}</h3>
                <p className={styles.titulo}>Challenge React</p>
                <p className={styles.descripcion}>Este challenge es una forma de aprendizaje. Es un mecanismo donde me comprometí en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>

            </div>

            {/* Imagen a la derecha */}
            <Link to={`/${id}`}>
                <img src={imagen} alt={titulo} className={styles.imagen} />
            </Link>
        </div>
    );
}

export default CardBanner;
