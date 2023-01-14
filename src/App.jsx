import './App.css'; 
// Se importa el archivo de estilos App.css
import Boton from './components/Boton'; 
// Se importa el componente personalizado Boton
import Contador from './components/Contador'; 
// Se importa el componente personalizado Contador
import freeCodeCampLogo from './img/freecodecamp-logo.png'; 
// Se importa la imagen freeCodeCampLogo
import { useState } from 'react'; 
// Se importa el hook useState de la librería React

// Se define una función para el componente App
function App() {

  // Se utiliza el hook useState para crear una variable de estado llamada numClics, inicialmente en 0
  const [numClics, setNumClics ] = useState(0);

  // Se define una función manejarClic que aumenta el valor de numClics en 1
  const manejarClic = () => {
    setNumClics(numClics+1);
  };

  // Se define una función reiniciarContador que establece el valor de numClics en 0
  const reiniciarContador = () => {
    setNumClics(0);
  };

  // Se retorna un JSX que renderiza una vista para el componente
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        {/* Se renderiza el componente Contador, pasando como prop el valor de numClics */}
        <Contador numClics={numClics} />
        {/* Se renderiza una instancia del componente Boton con el texto 'Clic', y la propiedad esBotonDeClic en true, y el evento onClick atado a la función manejarClic */}
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          
        {/* Se renderiza una instancia del componente Boton con el texto 'Reinicar' y el evento onClick atado a la función reiniciarContador */}
        <Boton
          texto='Reinicar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

// Se exporta el componente App para ser utilizado en otras partes de la aplicación
export default App;
