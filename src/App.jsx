import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home.jsx'
import Html from './pages/html.jsx'
import Css from './pages/css.jsx'
import Javascript from './pages/javascript.jsx';
import React from './pages/react.jsx'
import Headless from './pages/headless.jsx';

function App() {

  // Setter up routes til forskjellige navigasjoner
  // Brukte denne YouTube-videoen som inspirasjon for pages: https://www.youtube.com/watch?v=xMYo9jaMah8
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<React />} />
        <Route path="/headless-cms" element={<Headless />} />
      </Routes>
    </HashRouter>
    )
}

export default App