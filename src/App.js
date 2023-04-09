import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import Home from "./pages/home/home";
import {Menu} from "./pages/menu/menu";
import {Cart} from "./pages/cart/cart";

function App() {
  return (
   <div className="App"> 
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
