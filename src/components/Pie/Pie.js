import styles from "./Pie.module.css"
import logo from "./LogoMain.png"

function Pie() {
    return (<footer className={styles.container}>
        <img src={logo} alt="Logo AluraFlix" className={styles.img}/>
        <p className={styles.texto}>
        Desarrollado por <span>Yenny Ch. 2025</span>
    </p>
    <p className={styles.texto}>
        Este proyecto fue creado como parte del desafío <span>AluraFlix</span> de <span>Alura Latam</span> ¡Reto Cumplido!
    </p>
    </footer>)

}
export default Pie