function Prompts() {
  return (
    <section id="prompts">

      <h2>Bitácora de Uso de Inteligencia Artificial</h2>

      <p className="section-subtitle">
        Durante el desarrollo de esta auditoría se utilizó Inteligencia Artificial
        como herramienta de apoyo para investigar, estructurar el contenido,
        comprender vulnerabilidades y desarrollar la aplicación web.
      </p>

      <div className="card">

        <h3>Herramienta utilizada</h3>

        <p><strong>ChatGPT (OpenAI)</strong></p>

        <p>
          Se empleó para comprender la evaluación, organizar el proyecto,
          redactar borradores, explicar vulnerabilidades y apoyar el desarrollo
          de la aplicación React.
        </p>

      </div>

      <div className="timeline">

        <div className="timeline-card">
          <div className="timeline-number">1</div>

          <div>
            <h3>Planificación</h3>

            <p>
              Comprensión de la evaluación y organización del proyecto
              para la empresa Terranova.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">2</div>

          <div>
            <h3>Redacción del informe</h3>

            <p>
              Elaboración del resumen ejecutivo y desarrollo de los
              análisis de SQL Injection, XSS y Command Injection.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">3</div>

          <div>
            <h3>Análisis de Riesgo</h3>

            <p>
              Identificación de activos, construcción de la matriz de
              riesgo y priorización de controles de seguridad.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">4</div>

          <div>
            <h3>Desarrollo React</h3>

            <p>
              Creación de componentes, estructura del proyecto y mejoras
              en la presentación del informe.
            </p>
          </div>
        </div>

      </div>

      <div className="card">

        <h3>Uso Responsable de la IA</h3>

        <p>
          Todas las respuestas generadas fueron verificadas, adaptadas y
          contextualizadas al caso de Terranova. La IA fue utilizada como
          apoyo para acelerar el desarrollo, mientras que el análisis,
          priorización de riesgos, selección de controles y redacción final
          fueron realizados por el autor del trabajo.
        </p>

      </div>

      <div className="result-box">

        <h3>Documento completo</h3>

        <p>
          El registro detallado de todos los prompts utilizados, las
          respuestas aceptadas, las modificaciones realizadas y la reflexión
          final se encuentra documentado en el archivo
          <strong> 09_prompts_floosv.md</strong>.
        </p>

      </div>

    </section>
  );
}

export default Prompts;