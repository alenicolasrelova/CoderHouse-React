import './App.css';
import { NavBarrr } from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClassComponent } from './components/class-component/ClassComponent';
import functionalComponente from './components/function-component/functionalComponente';


const age = 18;
function App() {
  return (
    <div className="App">
      <NavBarrr />
      <ClassComponent age={age} name="alejandro"/>
      <functionalComponente />
    </div>
  );
}

export default App;
