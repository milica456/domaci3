import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import Home from "./pages/home/home";
import {Menu} from "./pages/menu/menu";
import {Cart} from "./pages/cart/cart";
import { MenuContextProvider } from './context/menu-context';


function App() {
  return (
   <div className="App"> 
    <MenuContextProvider>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
   
    </MenuContextProvider>
    </div>
);
}

export default App;
