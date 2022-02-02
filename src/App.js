import './App.css';
import { NavBarrr } from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClassComponent } from './components/class-component/ClassComponent';
import FuncionalComponente from './components/function-Component/FuncionalComponente';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ComponentChildren from './components/component-children/ComponentChildren';
import nombreTienda from './img/nombreTienda.png';
import CuentaClicks from './components/contador-class/Contador';

const age = 18;
function App() {
  return (
    <div className="App">
      <img src={nombreTienda} alt="Nombre Tienda" className="imagenNombreTienda"></img>
      <NavBarrr />
      <CuentaClicks />
      <ClassComponent age={age} name="alejandro"/>
      <hr />
      <FuncionalComponente age={age} name="alejandro"/>
      <hr />
      <ItemListContainer />

      <ComponentChildren otherProps="titulo">
        <h2>Componente Hijo</h2>
        <p>lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, 
        lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, 
        </p>
      </ComponentChildren>
      <br/>
      <br/>
    </div>
    
  );
}

export default App;
