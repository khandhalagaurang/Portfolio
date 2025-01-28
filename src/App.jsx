import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './components/Home/Home'
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contect from './components/Contect/Contect';
import Project from './components/Project/Project';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Project />
      <Contect />
    </div>
  )
}

export default App
