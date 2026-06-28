function Comandos() {
  return (
    <section id="comandos">

      <h2>Command Injection</h2>

      <p className="section-subtitle">
        Vulnerabilidad que permite ejecutar comandos del sistema operativo
        desde la aplicación web cuando las entradas del usuario no son
        correctamente validadas.
      </p>

      <div className="card">

        <h3>Descripción Técnica</h3>

        <p>
          Durante la auditoría se comprobó que el formulario es vulnerable a
          Inyección de Comandos. Utilizando el payload
          <strong> 127.0.0.1; cat /etc/passwd </strong>
          fue posible ejecutar comandos directamente sobre el sistema
          operativo del servidor, evidenciando un grave riesgo para la
          infraestructura tecnológica de Terranova.
        </p>

      </div>

      <div className="attack-grid">

        <div className="attack-card">

          <h3>Evidencia</h3>

          <img
            src="/docs_floosv/img_floosv/comandos_floosv.png"
            alt="Command Injection"
            className="attack-image"
          />

          <p>
            Captura obtenida durante el laboratorio DVWA.
          </p>

        </div>

        <div className="attack-card">

          <h3>Evaluación CVSS</h3>

          <div className="cvss-score danger">

            9.8

          </div>

          <h4>CRÍTICO</h4>

          <p>
            Compromete directamente el servidor donde se ejecuta la
            aplicación.
          </p>

        </div>

      </div>

      <div className="card">

        <h3>Impacto para Terranova</h3>

        <ul>

          <li>Acceso al sistema operativo.</li>

          <li>Robo de información confidencial.</li>

          <li>Manipulación de contratos digitales.</li>

          <li>Interrupción del portal inmobiliario.</li>

          <li>Pérdida de disponibilidad del servicio.</li>

          <li>Compromiso total del servidor.</li>

        </ul>

      </div>

      <div className="summary-grid">

        <div className="summary-box">

          <h3>Prevención</h3>

          <ul>

            <li>Validar todas las entradas.</li>

            <li>No ejecutar comandos del sistema desde la aplicación.</li>

            <li>Aplicar listas blancas de comandos.</li>

            <li>Separar privilegios del sistema.</li>

          </ul>

        </div>

        <div className="summary-box">

          <h3>Mitigación</h3>

          <ul>

            <li>EDR/Antimalware.</li>

            <li>Monitoreo de procesos.</li>

            <li>Registro de eventos.</li>

            <li>Actualizaciones del servidor.</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Comandos;