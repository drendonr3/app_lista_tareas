import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarCompleatadas,cambiarMostrarCompleatadas}) => {
    const toggleCompletadas = ()=> {
        cambiarMostrarCompleatadas(!mostrarCompleatadas);
    }
    return (
        <header className="header">
            <h1 className="header__titulo">Lista de Tareas</h1>
            { mostrarCompleatadas ? 
                <button 
                    className="header__boton"
                    onClick = {()=>toggleCompletadas()}
                >
                    No mostrar Completadas
                    <FontAwesomeIcon 
                        icon={faEyeSlash} 
                        className="header__icono-boton"
                    ></FontAwesomeIcon>
                </button>
            :
                <button 
                    className="header__boton"
                    onClick = {()=>toggleCompletadas()}
                >
                    Mostrar Completadas
                    <FontAwesomeIcon 
                        icon={faEye} 
                        className="header__icono-boton"
                    ></FontAwesomeIcon>
                </button>
            }
        </header>
    );
}

export default Header;