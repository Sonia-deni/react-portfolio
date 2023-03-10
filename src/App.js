import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Header from './components/Header/Header';

//  <Route path="/" element={<Home/>}/>

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
