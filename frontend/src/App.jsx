import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Services from "./pages/Services"
import Agence from "./pages/Agence"
// import Projetneuf from "./components/Projetneufs"
// import Projetreha from "./components/Projetreha"
// import Projetpatri from "./components/Projetpatri"
import Projets from "./pages/Projets"

import Test from "./components/Test"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />}>
          {/* <Route index element={<Projetneuf />} />

          <Route path="reha" element={<Projetreha />} />

          <Route path="patrimoine" element={<Projetpatri />} /> */}
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <div className="footer_scroll">
        {" "}
        <Footer />
      </div>
    </div>
  )
}

export default App
