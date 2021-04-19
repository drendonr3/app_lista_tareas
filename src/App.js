import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './componentes/Header'
import FormularioTareas from './componentes/FormularioTareas'
import ListaTareas from './componentes/ListaTareas';

const App =() => {
  const tareasGuardadas = localStorage.getItem('tareas') ?localStorage.getItem('tareas'):[];
  const mostrarCompleatadasGuardadas = localStorage.getItem('mostrarCompleatadas') ? Boolean(localStorage.getItem('mostrarCompleatadas')):false;
  const [tareas,cambiarTareas] = useState(JSON.parse(tareasGuardadas));

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas));
  },[tareas]);
 
  const [mostrarCompleatadas,cambiarMostrarCompleatadas] = useState(mostrarCompleatadasGuardadas);

  useEffect(()=>{
    localStorage.setItem('mostrarCompleatadas', mostrarCompleatadas.toString());
  },[mostrarCompleatadas]);


  return (
    <div className='contenedor'>
      <Header 
        mostrarCompleatadas={mostrarCompleatadas}
        cambiarMostrarCompleatadas = {cambiarMostrarCompleatadas}
      ></Header>
      <FormularioTareas 
        tareas={tareas} 
        cambiarTareas = {cambiarTareas}
        ></FormularioTareas>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompleatadas={mostrarCompleatadas}
      ></ListaTareas>
    </div>
  );
}

export default App;
