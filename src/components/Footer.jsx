function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>Terranova Inmobiliaria</h3>

          <p>
            Auditoría de Seguridad Web desarrollada para la asignatura
            <strong> TI3034 - Fundamentos de Seguridad de la Información.</strong>
          </p>
        </div>

        <div>

          <h4>Empresa Auditada</h4>

          <p>Terranova Inmobiliaria</p>

          <p>Portal de Clientes</p>

        </div>

        <div>

          <h4>Vulnerabilidades</h4>

          <p>SQL Injection</p>

          <p>Cross Site Scripting (XSS)</p>

          <p>Command Injection</p>

        </div>

        <div>

          <h4>Información</h4>

          <p>Contratos</p>

          <p>Datos Financieros</p>

          <p>Datos Personales</p>

        </div>

      </div>

      <hr />

      <p className="footer-copy">
        © 2026 • Proyecto Académico • TI3034 • Auditoría de Seguridad Web
      </p>

    </footer>
  );
}

export default Footer;