function Recuperacion() {
  return (
    <section id="recuperacion">

      <h2>Plan de Recuperación ante Desastres (DRP)</h2>

      <p className="section-subtitle">
        El siguiente plan establece las acciones que debe ejecutar
        Terranova Inmobiliaria para recuperar la continuidad operativa
        del portal de clientes frente a un incidente de seguridad.
      </p>

      <div className="timeline">

        <div className="timeline-card">
          <div className="timeline-number">1</div>

          <div>
            <h3>Detección</h3>

            <p>
              Identificar el incidente mediante monitoreo continuo,
              alertas automáticas y revisión de registros del sistema.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">2</div>

          <div>
            <h3>Contención</h3>

            <p>
              Aislar los servidores comprometidos, bloquear accesos
              sospechosos y evitar la propagación del ataque.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">3</div>

          <div>
            <h3>Erradicación</h3>

            <p>
              Eliminar la vulnerabilidad explotada, aplicar parches de
              seguridad y validar que no existan accesos no autorizados.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">4</div>

          <div>
            <h3>Recuperación</h3>

            <p>
              Restaurar la información desde respaldos verificados y
              habilitar nuevamente el portal de clientes.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">5</div>

          <div>
            <h3>Verificación</h3>

            <p>
              Confirmar el correcto funcionamiento del sistema,
              realizar pruebas de seguridad y monitorear la estabilidad
              del servicio.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <div className="timeline-number">6</div>

          <div>
            <h3>Mejora Continua</h3>

            <p>
              Documentar el incidente, actualizar políticas de
              seguridad y capacitar al personal para reducir la
              probabilidad de futuros ataques.
            </p>
          </div>
        </div>

      </div>

      <div className="card">

        <h3>Objetivo del DRP</h3>

        <p>

          Garantizar que Terranova pueda recuperar la operación del
          portal de clientes en el menor tiempo posible,
          preservando la confidencialidad, integridad y
          disponibilidad de la información crítica.

        </p>

      </div>

    </section>
  );
}

export default Recuperacion;