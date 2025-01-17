import { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from "@mui/material";
import styles from "./NuevoVideo.module.css";
import { useNavigate } from 'react-router-dom';

const categorias = ["Backend", "FrontEnd", "Innovación y Gestión"];

// Estilos  para los texts
const inputStyles = {
    '& .MuiInputBase-input': {
        color: 'white', // color del texto a blanco
    },
    '& .MuiInputLabel-root': {
        color: 'white', // color del label a blanco
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'white', //label se quede blanco focus
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue",
        borderWidth: "2px"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "darkblue"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white", // borde  blanco cuando el campo tiene focus
        borderWidth: "2px"
    }
};

function NuevoVideo() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [link, setLink] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoVideo = {
            id: String(Date.now()),
            titulo,
            categoria,
            imagen,
            link,
            descripcion
        };

        try {
            const response = await fetch('http://localhost:3001/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoVideo)
            });

            if (response.ok) {
                alert("Video añadido con éxito");
                navigate('/');  // Redirige a Home después de guardar
            } else {
                alert("Error al guardar el video");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error de conexión");
        }
    };

    return (
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <h2>Nuevo Video</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        fullWidth
                        required
                        sx={inputStyles} // estilos comunes
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth required>
                        <InputLabel
                            htmlFor="categoria"
                            sx={{
                                color: 'white',
                                '&.Mui-focused': {
                                    color: 'white', // Color blanco cuando está enfocado
                                },
                                // Ajusta el espacio cuando el campo está enfocado
                                transform: 'translate(14px, 12px) scale(1)',
                            }}
                        >
                            Categoría
                        </InputLabel>
                        <Select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            sx={{
                                '& .MuiInputBase-input': { color: 'white' }, // color del texto
                                '& .MuiInputLabel-root': { color: 'white' }, //color del label
                                '& .MuiInputLabel-root.Mui-focused': { color: 'white' }, // Asegura que el label se quede blanco cuando esté enfocado
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "blue", // Borde azul 
                                    borderWidth: "2px"
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "darkblue" // hover
                                },
                                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white", // Borde blanco enfocado
                                    borderWidth: "2px"
                                },
                                "& .MuiSelect-icon": {
                                    color: "white", // Color del icono de selección
                                }
                            }}
                        >
                            {categorias.map((cat, index) => (
                                <MenuItem key={index} value={cat}>{cat}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Imagen (URL)"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        fullWidth
                        required
                        sx={inputStyles}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Link del Video"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        fullWidth
                        required
                        sx={inputStyles}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        sx={inputStyles}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default NuevoVideo;
