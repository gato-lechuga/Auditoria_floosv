function Matriz() {
  return (
    <section id="matriz">

      <h2>Matriz de Riesgo</h2>

      <p className="section-subtitle">
        Priorización de las vulnerabilidades identificadas según su
        probabilidad de ocurrencia y el impacto que tendrían sobre
        Terranova Inmobiliaria.
      </p>

      <div className="risk-layout">

        <div className="heatmap">

          <div></div>
          <div className="header">Bajo</div>
          <div className="header">Medio</div>
          <div className="header">Alto</div>

          <div className="header">Alta</div>
          <div className="risk red">Command Injection</div>
          <div className="risk orange">XSS</div>
          <div className="risk red">SQL Injection</div>

          <div className="header">Media</div>
          <div className="risk green"></div>
          <div className="risk yellow"></div>
          <div className="risk orange"></div>

          <div className="header">Baja</div>
          <div className="risk green"></div>
          <div className="risk green"></div>
          <div className="risk yellow"></div>

        </div>

      </div>

      <div className="card">

        <h3>Evaluación de Riesgos</h3>

        <table className="risk-table">

          <thead>

            <tr>

              <th>Vulnerabilidad</th>
              <th>Probabilidad</th>
              <th>Impacto</th>
              <th>Nivel</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>SQL Injection</td>
              <td>Alta</td>
              <td>Alto</td>
              <td>Crítico</td>

            </tr>

            <tr>

              <td>XSS Reflected</td>
              <td>Alta</td>
              <td>Medio</td>
              <td>Alto</td>

            </tr>

            <tr>

              <td>Command Injection</td>
              <td>Alta</td>
              <td>Alto</td>
              <td>Crítico</td>

            </tr>

          </tbody>

        </table>

      </div>

      <div className="result-box">

        <h3>Conclusión</h3>

        <p>

          El análisis demuestra que SQL Injection y Command Injection
          representan los riesgos más críticos para Terranova,
          debido a que podrían comprometer información financiera,
          contratos digitales e incluso la infraestructura del servidor.
          Aunque XSS presenta un impacto menor, sigue siendo una
          vulnerabilidad importante por su capacidad para comprometer
          sesiones de usuarios y afectar la confianza de los clientes.

        </p>

      </div>

    </section>
  );
}

export default Matriz;