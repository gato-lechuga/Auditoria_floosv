import {
    ShieldCheck,
    ShieldAlert
} from "lucide-react";

function Controles() {
  return (
    <section id="controles">

      <h2>Controles de Prevención y Mitigación</h2>

      <p className="section-subtitle">
        Con el objetivo de reducir la probabilidad de explotación de las
        vulnerabilidades identificadas, Terranova Inmobiliaria debe implementar
        controles técnicos, administrativos y operacionales que fortalezcan la
        seguridad del portal de clientes.
      </p>

      <div className="controls-grid">

        <div className="control-card">
          <h3><ShieldCheck size={26}/>
            Prevención</h3>

          <ul>
            <li>Consultas SQL parametrizadas.</li>
            <li>Validación y sanitización de entradas.</li>
            <li>Principio de mínimo privilegio.</li>
            <li>Autenticación multifactor (MFA).</li>
            <li>Capacitación en ciberseguridad para el personal.</li>
            <li>Actualización permanente del software.</li>
          </ul>

        </div>

        <div className="control-card">
          <h3><ShieldAlert size={26}/>
            Mitigación</h3>

          <ul>
            <li>Firewall de Aplicaciones Web (WAF).</li>
            <li>Monitoreo continuo de eventos (SIEM).</li>
            <li>Registro y auditoría de accesos.</li>
            <li>Detección de intrusiones (IDS/IPS).</li>
            <li>Escaneos periódicos de vulnerabilidades.</li>
            <li>Respuesta inmediata ante incidentes.</li>
          </ul>

        </div>

      </div>

      <div className="card">

        <h3>Política General de Seguridad</h3>

        <p>
          Terranova debe adoptar una estrategia de defensa en profundidad,
          integrando controles preventivos, detectivos y correctivos. La
          implementación de estas medidas permitirá reducir significativamente
          la probabilidad de explotación de vulnerabilidades y mejorar la
          protección de la información crítica administrada por la empresa.
        </p>

      </div>

    </section>
  );
}

export default Controles;