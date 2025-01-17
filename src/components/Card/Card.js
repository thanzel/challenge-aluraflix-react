import styles from "./Card.module.css";
import iconEditar from "./Editar.png";
import iconBorrar from "./Borrar.png";
import { Link } from "react-router-dom";
import Button from "components/Botones/Button";

function Card({ id, titulo, categoria, imagen, link, descripcion, onDelete, onEdit }) {
    // Funciones al hacer clic en los botones
    const handleBorrar = () => {
        console.log(`Borrar el video con ID: ${id}`);
        if (window.confirm(`¿Estás seguro de que deseas borrar el video: "${titulo}"?`)) {
            onDelete(id);  // del componente padre
        }
    };

    const handleEditar = () => {
        console.log(`Editar el video con ID: ${id}`);
        onEdit(id); // editar el video
    };

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={imagen} alt={titulo} className={styles.imagen} />
                <h2 className={styles.titulo}></h2>
            </Link>
            <div className={styles.buttons}>
                <Button
                    imagen={iconBorrar}
                    texto="Borrar"
                    onClick={handleBorrar}
                    alt="Borrar"
                />
                <Button
                    imagen={iconEditar}
                    texto="Editar"
                    onClick={handleEditar}
                    alt="Editar"
                />
            </div>
        </div>
    )
}

export default Card