import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home';
import Projects from './components/Projects';
import AllCategories from './components/AllCategories';
import SingleVideo from './components/SingleVideo';
import Footer from './components/Footer';
import Admin from './components/Admin';
import TopVideos from './components/TopVideos';
import SingleCategory from './components/SingleCategory';
import ScrollToTop from './components/Extras/ScrollToTop';
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
    <ScrollToTop>
      <div className="App">
     <Nav/>

     <div className="nonav">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/topVideos" element={<TopVideos/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/allcategories" element={<AllCategories/>}/>
        <Route path="/category/:name" element={<SingleCategory/>}/>
        <Route path="/video/:id" element={<SingleVideo/>}/>
        
        <Route path="*" element={<Navigate replace to="/" />}/>

    </Routes>
     </div>
     

     <div className="footerDiv">
     <Footer/>
     </div>
    </div>
    </ScrollToTop>
    </Router>
    
  );
}

export default App;
