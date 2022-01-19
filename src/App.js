import './App.css';
import { NavBarrr } from "./components/navBar/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { navLogo } from "./components/navBar/navLogo";
function App() {
  return (
    <div className="App">
      
      <NavBarrr />
      <navLogo />
    </div>
  );
}

export default App;
