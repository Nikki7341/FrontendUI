import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LandingPage from './components/LandingPage';
import Home from "./components/Home";




function App() {
  return (
    <div className="App">
     <div className="container-fluid">
       <Home />
     </div>
    </div>
  );
}

export default App;
