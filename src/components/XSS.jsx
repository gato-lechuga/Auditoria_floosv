function XSS() {
  return (
    <section id="xss">

      <h2>Cross Site Scripting (XSS Reflected)</h2>

      <p className="section-subtitle">
        Vulnerabilidad que permite ejecutar código JavaScript en el navegador
        de un usuario mediante la inyección de scripts maliciosos.
      </p>

      <div className="card">

        <h3>Descripción Técnica</h3>

        <p>
          Durante la auditoría se comprobó que la aplicación no valida ni
          sanitiza correctamente los datos ingresados por el usuario.
          Utilizando el payload
          <strong>{" <script>alert('XSS')</script> "}</strong>
          fue posible ejecutar código JavaScript dentro del navegador,
          demostrando que un atacante podría robar cookies de sesión,
          redirigir al usuario o modificar el contenido de la página.
        </p>

      </div>

      <div className="attack-grid">

        <div className="attack-card">

          <h3>Evidencia</h3>

          <img
            src="/docs_floosv/img_floosv/xss_floosv.png"
            alt="Ataque XSS"
            className="attack-image"
          />

          <p>
            Captura del ataque XSS ejecutado en DVWA.
          </p>

        </div>

        <div className="attack-card">

          <h3>Evaluación CVSS</h3>

          <div className="cvss-score warning">
            6.1
          </div>

          <h4>MEDIO</h4>

          <p>
            Permite ejecutar código en el navegador de la víctima y comprometer
            su sesión.
          </p>

        </div>

      </div>

      <div className="card">

        <h3>Impacto para Terranova</h3>

        <ul>

          <li>Robo de sesiones de clientes.</li>

          <li>Suplantación de identidad.</li>

          <li>Manipulación del portal web.</li>

          <li>Pérdida de confianza de los clientes.</li>

          <li>Daño reputacional.</li>

        </ul>

      </div>

      <div className="summary-grid">

        <div className="summary-box">

          <h3>Prevención</h3>

          <ul>

            <li>Escapar caracteres especiales.</li>

            <li>Validar entradas del usuario.</li>

            <li>Sanitizar datos antes de mostrarlos.</li>

            <li>Aplicar Content Security Policy (CSP).</li>

          </ul>

        </div>

        <div className="summary-box">

          <h3>Mitigación</h3>

          <ul>

            <li>Cookies HttpOnly y Secure.</li>

            <li>Monitoreo de actividad sospechosa.</li>

            <li>Actualización permanente del portal.</li>

            <li>Pruebas de seguridad periódicas.</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default XSS;