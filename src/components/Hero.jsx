import {
    Building2,
    Globe,
    FileText,
    Landmark,
    ShieldAlert
} from "lucide-react";

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-left">

        <span className="badge">
          Auditoría de Seguridad Web
        </span>

        <h1>
          Terranova Inmobiliaria
        </h1>

        <p className="hero-text">
          Evaluación de vulnerabilidades realizada sobre el portal de clientes
          de la empresa ficticia <strong>Terranova</strong>, cuyo sistema
          almacena contratos, datos personales e información financiera.
        </p>

        <div className="hero-buttons">

          <a href="#resumen" className="btn-primary">
            Ver Informe
          </a>

          <a href="#matriz" className="btn-secondary">
            Matriz de Riesgo
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          <h3>Información General</h3>

          <div className="info-label">
              <Building2 size={18}/>
              Empresa
          </div>

          <div className="info-label">
              <Globe size={18}/>
              Portal
          </div>

          <div className="info-label">
            <FileText size={18}/>
            Activos
          </div>

          <div className="info-label">
            <Landmark size={18}/>
             Datos
          </div>

          <div className="info-label">
             <ShieldAlert size={18}/>
             Riesgo
          </div>

        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <h2>3</h2>

          <p>Vulnerabilidades</p>

        </div>

        <div className="stat-card">

          <h2>6</h2>

          <p>Activos</p>

        </div>

        <div className="stat-card">

          <h2>2</h2>

          <p>Riesgos Críticos</p>

        </div>

        <div className="stat-card">

          <h2>1</h2>

          <p>Riesgo Alto</p>

        </div>

      </div>

    </section>
  );
}

export default Hero;