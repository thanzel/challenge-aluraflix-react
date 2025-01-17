import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const VideosContext = createContext();

// Proveedor del contexto
export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/thanzel/data-aluraflix-api/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useVideos = () => useContext(VideosContext);
