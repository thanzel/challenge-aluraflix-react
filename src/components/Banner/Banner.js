import styles from "./Banner.module.css"

import CardBanner from "components/CardBanner/CardBanner"
import logoBanner from "./banner.png"
import { useEffect, useState } from "react";


function Banner({ videos, img, color }) {

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        if (Array.isArray(videos) && videos.length > 0) {
            setCargando(false);  
        }
    }, [videos]);

    // Evita mostrar el banner si aún no hay videos disponibles
    if (cargando) {
        return <p>Reproductor de Video</p>;
    }
    
    // Obtener solo el primer video 
    const primerVideo = videos[0];
console.log(videos)
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `url(${logoBanner})`
            }}
        >
            <div className={styles.gradient} style={{ background: `${color}` }}></div>
            <div className={styles.cardBanner}>
                <CardBanner video={primerVideo} />
            </div>
        </div>
    );
}

export default Banner;
