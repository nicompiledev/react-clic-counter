import React from "react";
// Se importa React para poder utilizar JSX
import '../stylesheets/Boton.css';
// Se importa el archivo de estilos para el componente Boton

// Se define una función para el componente Boton que recibe como parámetros: texto, esBotonDeClic y manejarClic
function Boton({ texto, esBotonDeClic, manejarClic }) {
  // Se retorna JSX que representa un botón HTML con una clase dinámica basada en el valor de esBotonDeClic, y un evento onClick atado a la función manejarClic
  return (
    <button 
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

// Se exporta el componente Boton para ser utilizado en otras partes de la aplicación
export default Boton;
