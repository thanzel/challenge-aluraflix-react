import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import EditarVideoModal from "components/EditarVideoModal/EditarVideoModal";
import styles from "./inicio.module.css";


import { useEffect, useMemo, useState } from "react";

// Categorías
const categorias = ["Backend", "FrontEnd", "Innovación y Gestión"];
const categoriaColores = {
    Backend: "#ff5733",
    FrontEnd: "#33c3ff",
    "Innovación y Gestión": "#66b32f"
};

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:3001/videos");
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                console.error("Error al cargar los videos", error);
            }
        };

        fetchVideos();
    }, []);

    const [videoEditado, setVideoEditado] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);

    //Borrar Video
    const handleBorrar = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/videos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const videosActualizados = videos.filter(video => video.id !== id);
                setVideos(videosActualizados);
            } else {
                console.error('Error al eliminar el video:', await response.text());
            }
        } catch (error) {
            console.error("Error al borrar el video", error);
        }
    };

    //Data que pasa a la modal para editar
    const handleEditar = (id) => {
        const videoSeleccionado = videos.find(video => video.id === id);
        setVideoEditado(videoSeleccionado);
        setModalAbierto(true);
    };

    //Editar video - guardar
    const handleGuardarEdicion = async (id, titulo, categoria, imagen, link, descripcion) => {
        const videoEditado = { titulo, categoria, imagen, link, descripcion };

        try {
            const response = await fetch(`http://localhost:3001/videos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(videoEditado),
            });

            if (response.ok) {
                const updatedVideo = await response.json();
                console.log('Video actualizado:', updatedVideo);

                setVideos(prevVideos =>
                    prevVideos.map(video =>
                        video.id === id ? { ...video, ...updatedVideo } : video
                    )
                );
            } else {
                console.error('Error al actualizar el video:', await response.text());
            }
        } catch (error) {
            console.error('Error en la solicitud', error);
        } finally {
            // Cerrar el modal después de guardar los cambios
            setModalAbierto(false);
            setVideoEditado(null);
        }
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setVideoEditado(null);
    };

    const groupedVideos = useMemo(() => {
        return videos.reduce((acc, { categoria, ...video }) => {
            acc[categoria] = acc[categoria] || [];
            acc[categoria].push({ ...video, id: video.id });
            return acc;
        }, {});
    }, [videos]);


    return (
        <>
            {/* llama al Banner */}
            {videos.length > 0 && <Banner videos={videos} img="Main" color="#154580" />}

            <EditarVideoModal
                videoEditado={videoEditado}
                categorias={categorias}
                modalAbierto={modalAbierto}
                cerrarModal={cerrarModal}
                handleGuardarEdicion={handleGuardarEdicion}
            />

            {/* Agrupa videos por Categorias */}
            {Object.entries(groupedVideos).map(([categoria, videosPorCategoria]) => (
                <div key={categoria}>
                    <h2 className={styles.categoriaTitulo} style={{ backgroundColor: categoriaColores[categoria] }}>
                        {categoria}
                    </h2>
                    <section className={styles.container}>
                        {videosPorCategoria.map(video => (
                            <Card
                                {...video}
                                key={video.id}
                                onDelete={handleBorrar}
                                onEdit={handleEditar}
                            />
                        ))}
                    </section>
                </div>
            ))}
        </>
    );
}

export default Inicio;
