import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Resumen from "./components/Resumen";
import SQLi from "./components/SQLi";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Activos from "./components/Activos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";
import Prompts from "./components/Prompts";
import Sidebar from "./components/Sidebar";

import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        <Hero />

        <Resumen />

        <SQLi />

        <XSS />

        <Comandos />

        <Activos />

        <Matriz />

        <Controles />

        <Recuperacion />

        <Prompts />

        <Footer />
        
        <BackToTop />

      </main>

    </div>
  );
}

export default App;