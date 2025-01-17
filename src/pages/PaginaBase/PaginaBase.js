import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container/Container"
import Pie from "components/Pie/Pie"
import { Outlet } from "react-router-dom"
import styles from './PaginaBase.modulo.css'

function PaginaBase() {
    return (
        <main className={styles.main}>
            <Cabecera />
            <Container className={styles.container}>
                <Outlet />
            </Container>
            <Pie />
        </main>
    )
}
export default PaginaBase
