import './App.css';
import { NavBarrr } from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClassComponent } from './components/class-component/ClassComponent';
import FuncionalComponente from './components/function-Component/FuncionalComponente';


const age = 18;
function App() {
  return (
    <div className="App">
      <NavBarrr />
      <ClassComponent age={age} name="alejandro"/>
      <hr />
      <FuncionalComponente age={age} name="alejandro"/>
    </div>
  );
}

export default App;
