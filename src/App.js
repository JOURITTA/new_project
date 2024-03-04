
import './App.css';
import Exemple_Navbar from './components/Exemple_Navbar';
import Movielist from './components/movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import netflixlogo from './Couleur-logo-Netflix.jpg'
import Compter from './components/Compter';
function App() {
  return (
    <div className="App">
      <Exemple_Navbar logo={netflixlogo} />
      <Compter/>
      <Movielist/>
    
    </div>
  );
}

export default App;
