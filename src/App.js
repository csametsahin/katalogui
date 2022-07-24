import Home from './views/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Home/>
      <Navbar/>
    </div>
  );
}

export default App;
