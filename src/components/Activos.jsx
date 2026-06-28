import {
    FileText,
    Landmark,
    User,
    House,
    KeyRound,
    Database
} from "lucide-react";
function Activos() {
  return (
    <section id="activos">

      <h2>Activos de Información</h2>

      <p className="section-subtitle">
        La información administrada por Terranova Inmobiliaria representa el
        principal activo del negocio. La pérdida de confidencialidad,
        integridad o disponibilidad podría afectar la operación,
        la confianza de los clientes y el cumplimiento normativo.
      </p>

      <div className="assets-business">

        <div className="business-card">
          <span><FileText size={42}/></span>
          <h3>Contratos</h3>
          <p>
            Documentos de compra, venta y arriendo de propiedades.
          </p>
        </div>

        <div className="business-card">
          <span><Landmark size={42}/></span>
          <h3>Datos Financieros</h3>
          <p>
            Información de pagos, créditos, cuentas y transacciones.
          </p>
        </div>

        <div className="business-card">
          <span><User size={42}/></span>
          <h3>Datos Personales</h3>
          <p>
            Información identificatoria de clientes y propietarios.
          </p>
        </div>

        <div className="business-card">
          <span><House size={42}/></span>
          <h3>Propiedades</h3>
          <p>
            Catálogo inmobiliario, avalúos, fotografías y documentación.
          </p>
        </div>

        <div className="business-card">
          <span><KeyRound size={42}/></span>
          <h3>Credenciales</h3>
          <p>
            Usuarios, contraseñas y permisos de acceso al sistema.
          </p>
        </div>

        <div className="business-card">
          <span><Database size={42}/></span>
          <h3>Respaldos</h3>
          <p>
            Copias de seguridad utilizadas para la recuperación del negocio.
          </p>
        </div>

      </div>

      <div className="card">

        <h3>Valor para el Negocio</h3>

        <p>

          Estos activos permiten a Terranova operar diariamente y mantener la
          confianza de sus clientes. La exposición o pérdida de cualquiera de
          ellos podría provocar pérdidas económicas, interrupción del servicio,
          incumplimiento contractual y daños reputacionales.

        </p>

      </div>

    </section>
  );
}

export default Activos;