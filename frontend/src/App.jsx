import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Projets from "./pages/Projets"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Services from "./pages/Services"
import Agence from "./pages/Agence"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/services" element={<Services />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
      <div className="footer_scroll">
        {" "}
        <Footer />
      </div>
    </div>
  )
}

export default App
