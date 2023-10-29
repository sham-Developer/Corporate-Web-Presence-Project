import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Top from './Components/top';
import Footer from './Components/Footer';

const App = () =>{
  return(
    <>
    <Top />
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
    <br></br>
  
    </>
  )
}
export default App;
