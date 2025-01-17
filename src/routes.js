import NotFound from "pages/NotFound/NotFound";
import NuevoVideo2 from "pages/NuevoVideo/NuevoVideo";
import PaginaBase from "pages/PaginaBase/PaginaBase";
import Player from "pages/Player/Player";

const { default: Inicio } = require("pages/Inicio/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

// para dejar todas las rutas, para ello debemos instalar npm install react-router-dom
//    En path es la ruta y el element es el componente a dibujar 
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="new" element={<NuevoVideo2 />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;