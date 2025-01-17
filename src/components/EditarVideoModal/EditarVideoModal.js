import { useState } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import editarStyles from "./EditarVideoModal.module.css";

const EditarVideoModal = ({ videoEditado, categorias, modalAbierto, cerrarModal, handleGuardarEdicion }) => {

    // Estilos comunes para los campos
    const campoEstilos = {
        '& .MuiInputBase-input': {
            color: 'white', // Cambia el color del texto a blanco
        },
        '& .MuiInputLabel-root': {
            color: 'white', // Cambia el color del label a blanco
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white', // Asegura que el label se quede blanco cuando el campo está enfocado
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue",
            borderWidth: "2px"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "darkblue"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue",
            borderWidth: "2px"
        }
    };

    return (
        <Dialog
            open={modalAbierto}
            onClose={cerrarModal}
            fullWidth
            maxWidth="sm"
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: "black",
                    color: "white"
                }
            }}
        >
            <DialogTitle>Editar Card</DialogTitle>
            <DialogContent>
                {videoEditado && (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleGuardarEdicion(
                            videoEditado.id,
                            e.target.titulo.value,
                            e.target.categoria.value,
                            e.target.imagen.value,
                            e.target.link.value,
                            e.target.descripcion.value
                        );
                    }}>
                        <TextField
                            required
                            label="Título"
                            name="titulo"
                            defaultValue={videoEditado.titulo}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            sx={campoEstilos} // Aplicamos los estilos comunes
                        />

                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel
                                htmlFor="categoria"
                                sx={{
                                    color: 'white', // Cambia el color del título a blanco
                                    '&.Mui-focused': {
                                        color: 'white', // Cambia el color del título cuando está enfocado
                                    },
                                }}
                            >
                                Categoria
                            </InputLabel>
                            <Select
                                id="categoria"
                                name="categoria"
                                defaultValue={videoEditado.categoria}
                                label="Categoria"
                                sx={campoEstilos} // Aplicamos los estilos comunes
                            >
                                {categorias.map((categoria) => (
                                    <MenuItem key={categoria} value={categoria}>
                                        {categoria}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            required
                            label="Imagen URL"
                            name="imagen"
                            defaultValue={videoEditado.imagen}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            sx={campoEstilos} // Aplicamos los estilos comunes
                        />

                        <TextField
                            required
                            label="Video URL"
                            name="link"
                            defaultValue={videoEditado.link}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            sx={campoEstilos} // Aplicamos los estilos comunes
                        />

                        <TextField
                            required
                            label="Descripción"
                            name="descripcion"
                            defaultValue={videoEditado.descripcion}
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            variant="outlined"
                            sx={campoEstilos} // Aplicamos los estilos comunes
                        />
                        
                        <DialogActions>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={editarStyles.buttonSave}
                            >
                                Guardar Cambios
                            </Button>
                            <Button onClick={cerrarModal} color="secondary" className={editarStyles.buttonCancel}>Cancelar</Button>
                        </DialogActions>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default EditarVideoModal;
