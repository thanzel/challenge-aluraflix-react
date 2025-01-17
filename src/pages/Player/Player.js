import { useEffect, useState } from "react";
import Banner from "components/Banner/Banner";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";

function Player() {
    const { id } = useParams(); // Obtener el id 
    const [video, setVideo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/videos/${id}`)
            .then(response => response.json())
            .then(data => setVideo(data))
            .catch(error => console.error("Error al obtener el video:", error));
    }, [id]); 

    if (!video) {
        return <NotFound />; 
    }

    // Determinar si el video es un archivo de video (por ejemplo, MP4)
    const esVideo = video.link.endsWith(".mp4");

    return (
        <>
            <Banner img={video.imagen} color="#58B9AE" />
            <section className={styles.container}>
                {esVideo ? (
                    <video width="100%" controls>
                        <source src={video.link} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.link}
                        title={video.titulo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
            </section>
        </>
    );
}

export default Player;
