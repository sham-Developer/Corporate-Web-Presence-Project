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

const App = () =>{
  function toTop(){
    window.scrollTo(0,0);
  }
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
    <button className="btn btn-success" onClick={toTop} id='TopBtn'>Top &nbsp; <i class="fa fa-chevron-up"></i></button>
    </>
  )
}
export default App;
