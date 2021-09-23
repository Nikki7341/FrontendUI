import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LandingPage from './components/LandingPage';



function App() {
  return (
    <div className="App">
     <div className="container p-5">
       <LandingPage />
     </div>
    </div>
  );
}

export default App;
