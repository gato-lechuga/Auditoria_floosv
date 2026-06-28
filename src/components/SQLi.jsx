function SQLi() {
  return (
    <section id="sqli">

      <h2>SQL Injection</h2>

      <p className="section-subtitle">
        Vulnerabilidad que permite alterar consultas SQL enviadas al
        servidor mediante entradas manipuladas por el usuario.
      </p>

      <div className="card">

        <h3>Descripción Técnica</h3>

        <p>
          Durante la auditoría se comprobó que el formulario del portal
          es vulnerable a Inyección SQL. Utilizando el payload
          <strong> ' OR '1'='1 </strong>
          fue posible alterar la consulta SQL original y obtener acceso
          a toda la información almacenada en la base de datos.
        </p>

      </div>

      <div className="attack-grid">

        <div className="attack-card">

          <h3>Evidencia</h3>

          <img
            src="/docs_floosv/img_floosv/sqli_floosv.png"
            alt="SQL Injection"
            className="attack-image"
          />

          <p>
            Captura del ataque realizado en DVWA.
          </p>

        </div>

        <div className="attack-card">

          <h3>Evaluación CVSS</h3>

          <div className="cvss-score">

            9.8

          </div>

          <h4>CRÍTICO</h4>

          <p>
            La explotación permite acceder a información altamente
            sensible sin autorización.
          </p>

        </div>

      </div>

      <div className="card">

        <h3>Impacto para Terranova</h3>

        <ul>

          <li>Exposición de contratos digitales.</li>

          <li>Acceso a información financiera de clientes.</li>

          <li>Filtración de datos personales.</li>

          <li>Pérdida de confianza y reputación.</li>

          <li>Posibles sanciones legales.</li>

        </ul>

      </div>

      <div className="summary-grid">

        <div className="summary-box">

          <h3>Prevención</h3>

          <ul>

            <li>Consultas parametrizadas.</li>

            <li>Validación de entradas.</li>

            <li>ORM seguro.</li>

            <li>Principio de mínimo privilegio.</li>

          </ul>

        </div>

        <div className="summary-box">

          <h3>Mitigación</h3>

          <ul>

            <li>Firewall de aplicaciones (WAF).</li>

            <li>Registro de eventos.</li>

            <li>Monitoreo continuo.</li>

            <li>Auditorías periódicas.</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default SQLi;