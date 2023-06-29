import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Projets from "./pages/Projets"

import "./App.scss"
import Footer from "./pages/Footer"
import Header from "./pages/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
