import React from 'react';
import Tarea from './Tarea'

const ListaTareas = ({tareas,cambiarTareas,mostrarCompleatadas}) => {
    const toggleCompletada = id => {
        cambiarTareas(tareas.map(tarea => {
            if (tarea.id === id) {
                return{...tarea, completada : !tarea.completada};
            } else {
                return tarea;
            }
        }));
    };

    const editarTarea = (id,nuevoTexto) =>{
        cambiarTareas(tareas.map(tarea => {
            if (tarea.id === id) {
                return{...tarea, texto : nuevoTexto};
            } else {
                return tarea;
            }
        }));
    }

    const borrarTarea = (id) =>{
        cambiarTareas(tareas.filter(tarea => {
            if (tarea.id !== id) {
                return tarea
            } else {
                return;
            }
        }));
    }

    return ( 
        <ul className="lista-tareas">
            {tareas.length >0  ? 
                tareas.map(tarea=> {
                    if(mostrarCompleatadas | (!tarea.completada & !mostrarCompleatadas)) {
                        return <Tarea 
                            key={tarea.id} 
                            tarea={tarea}
                            toggleCompletada = {toggleCompletada}
                            editarTarea = {editarTarea}
                            borrarTarea = {borrarTarea}
                        ></Tarea>
                    } 
                    return;
                })
            :
                <div className="lista-tareas__mensaje">
                    ~No Hay Tareas Agregadas~
                </div>

            }
        </ul>
     );
}
 
export default ListaTareas;