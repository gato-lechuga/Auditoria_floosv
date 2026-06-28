import { useEffect, useState } from "react";

const menu = [
  ["inicio", "Inicio"],
  ["resumen", "Resumen Ejecutivo"],
  ["sqli", "SQL Injection"],
  ["xss", "XSS"],
  ["comandos", "Command Injection"],
  ["activos", "Activos"],
  ["matriz", "Matriz de Riesgo"],
  ["controles", "Controles"],
  ["recuperacion", "Recuperación"],
  ["prompts", "Uso de IA"],
];

function Sidebar() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <h2 className="logo">Terranova</h2>

      <p className="logo-subtitle">
        Auditoría de Seguridad Web
      </p>

      <nav>
        {menu.map(([id, titulo]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
          >
            {titulo}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;