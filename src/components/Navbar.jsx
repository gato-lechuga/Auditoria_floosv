function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        🛡️ <span>Terranova Security Audit</span>
      </div>

      <nav>
        <a href="#resumen">Resumen</a>
        <a href="#sqli">SQLi</a>
        <a href="#xss">XSS</a>
        <a href="#comandos">Comandos</a>
        <a href="#activos">Activos</a>
        <a href="#matriz">Riesgos</a>
        <a href="#controles">Controles</a>
        <a href="#recuperacion">DRP</a>
        <a href="#prompts">IA</a>
      </nav>
    </header>
  );
}

export default Navbar;