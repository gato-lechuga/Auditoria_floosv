function Resumen() {
  return (
    <section id="resumen">

      <h2>Resumen Ejecutivo</h2>

      <p className="section-subtitle">
        Síntesis de la auditoría de seguridad realizada sobre el portal
        de clientes de Terranova Inmobiliaria.
      </p>

      <div className="card">

        <h3>Descripción General</h3>

        <p>
          Terranova Inmobiliaria es una empresa ficticia dedicada a la
          administración y comercialización de bienes raíces.
          Su portal de clientes almacena información crítica como
          contratos digitales, datos personales e información
          financiera, por lo que resulta fundamental proteger la
          confidencialidad, integridad y disponibilidad de dichos
          activos.
        </p>

      </div>

      <div className="summary-grid">

        <div className="summary-box">
          <h3>Objetivo</h3>

          <p>
            Evaluar vulnerabilidades de seguridad mediante un entorno
            controlado (DVWA) para identificar riesgos y proponer
            medidas de prevención, mitigación y recuperación.
          </p>
        </div>

        <div className="summary-box">

          <h3>Alcance</h3>

          <p>
            Portal de clientes, considerando la protección de contratos,
            información financiera y datos personales.
          </p>

        </div>

      </div>

      <h3>Activos de Información Analizados</h3>

      <div className="assets-grid">

        <div className="asset-card">
          📄
          <h4>Contratos</h4>
        </div>

        <div className="asset-card">
          💳
          <h4>Finanzas</h4>
        </div>

        <div className="asset-card">
          👤
          <h4>Clientes</h4>
        </div>

        <div className="asset-card">
          🏠
          <h4>Propiedades</h4>
        </div>

      </div>

      <div className="result-box">

        <h3>Resultado General</h3>

        <p>

          Durante la auditoría se identificaron tres vulnerabilidades
          críticas (SQL Injection, Cross Site Scripting e Inyección de
          Comandos), las cuales representan un alto riesgo para la
          organización debido al impacto potencial sobre la
          confidencialidad de los datos, la integridad del sistema y la
          disponibilidad de los servicios.

        </p>

      </div>

    </section>
  );
}

export default Resumen;