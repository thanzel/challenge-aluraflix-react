import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./LogoMain.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink";

// 1 Se crea carpeta del componente
// 2 Se crea files .js y .css
// 3 en el .js se importa el css y se crea la funcion y se exporta
// 4 importar en pages/inicio/index.js e invocar allí a Cabecera  {/* sería la ruta */}

function Cabecera() {

    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix" className={styles.img} />
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">Home</CabeceraLink>
                <CabeceraLink url="./new" >Nuevo video</CabeceraLink>
            </nav>
        </header>
    );
}

export default Cabecera;