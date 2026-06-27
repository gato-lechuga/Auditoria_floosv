# Bitácora de uso de Inteligencia Artificial — Terranova

## 1. Introducción

Durante el desarrollo de esta evaluación se utilizó Inteligencia Artificial como apoyo para **investigar, estructurar, redactar y mejorar** parte del informe y de la aplicación web. El uso de IA no reemplazó el análisis personal, sino que fue empleado como una herramienta de apoyo para comprender vulnerabilidades, organizar el contenido y acelerar la construcción de la solución en React.

En todos los casos, la información entregada por la IA fue revisada, adaptada y corregida para ajustarla ser ajustada a los requerimientos de la evaluación.

## Registro de prompts utilizados

### Prompt para comprender la evaluación y planificar el trabajo
**Objetivo:** entender qué se debía construir y cómo organizar el proyecto.

> “Explícame qué tengo que hacer en esta evaluación y dame un paso a paso. Toma en cuenta que ya tengo React y que la empresa ficticia es Terranova, una inmobiliaria cuyo portal custodia contratos y datos financieros de clientes.”

**Sección relacionada:** planificación general del trabajo, estructura del proyecto y enfoque del informe.

**Qué acepté de la respuesta:**
- El orden recomendado de trabajo.
- La identificación de las secciones exigidas por la pauta.
- La contextualización del análisis al rubro inmobiliario.

**Qué corregí o adapté:**
- Adapté el lenguaje y la redacción para que se ajustaran al estilo del informe final.
- Revisé el alcance de cada sección para que coincidiera con la rúbrica.

---

## Prompt para redactar el resumen ejecutivo
**Objetivo:** construir la base del archivo `01_resumen_floosv.md`.

**Prompt utilizado:**
> “Redacta un resumen ejecutivo para una auditoría de seguridad web de la empresa ficticia Terranova, una inmobiliaria cuyo portal de clientes custodia contratos y datos financieros. El informe debe considerar SQL Injection, XSS y Command Injection en DVWA y aterrizar el impacto al negocio.”

**Sección relacionada:** `01_resumen_floosv.md`

**Qué acepté de la respuesta:**
- La estructura base del resumen.
- La forma de presentar el objetivo de la auditoría.
- La descripción de los tres hallazgos principales.

**Qué corregí o adapté:**
- Reforcé el enfoque en confidencialidad, integridad y disponibilidad.
- Hice ajustes de redaccion y corrección de algunos puntos.
- Incorporé la referencia al marco ético y a la Ley 21.459.

---

## Prompt para el análisis de SQL Injection
**Objetivo:** obtener una explicación técnica clara de la vulnerabilidad y su impacto para una inmobiliaria.

**Prompt utilizado:**
> “Explícame técnicamente cómo funciona una inyección SQL en DVWA con el payload `' OR '1'='1` y aterriza el impacto al contexto de Terranova, una inmobiliaria que almacena contratos y datos financieros de clientes. Incluye explicación técnica, impacto de negocio, prevención y mitigación.”

**Sección relacionada:** `02_sqli_floosv.md`

**Qué acepté de la respuesta:**
- La explicación del funcionamiento de la consulta vulnerable.
- La relación entre la vulnerabilidad y la exposición de información de base de datos.
- Propuestas de prevención y mitigación.

---

## Prompt para el análisis de XSS
**Objetivo:** comprender el funcionamiento de XSS reflected y relacionarlo con el portal de clientes de Terranova.

**Prompt utilizado:**
> “Desarrolla un análisis de XSS reflected usando el texto `<script>alert('XSS')</script>` y adáptalo al portal de clientes de una inmobiliaria llamada Terranova. Incluye explicación técnica, impacto, CVSS, prevención y mitigación.”

**Sección relacionada:** `03_xss_floosv.md`

**Qué acepté de la respuesta:**
- La explicación sobre reflexión de entrada y ejecución en navegador.
- Los ejemplos de impacto sobre sesiones y experiencia del cliente.
- Las medidas de sanitización y protección de cookies.

**Qué corregí o adapté:**
- Adapté el impacto a escenarios de robo de sesión, suplantación y captura de datos financieros.
- Ordené el contenido para cumplir el formato exigido por la pauta.

---

## Prompt para el análisis de Command Injection
**Objetivo:** comprender el funcionamiento de la inyección de comandos y su impacto en el servidor.

**Prompt utilizado:**
> “Explícame cómo funciona el ataque `127.0.0.1; cat /etc/passwd` en DVWA y conviértelo en un análisis para Terranova, una empresa inmobiliaria. Necesito explicación técnica, riesgos para el servidor, CVSS, prevención y mitigación.”

**Sección relacionada:** `04_comandos_floosv.md`

**Qué acepté de la respuesta:**
- La explicación sobre concatenación insegura de entrada en comandos del sistema.
- La gravedad del impacto sobre el servidor.

**Qué corregí o adapté:**
- Profundicé el vínculo con la disponibilidad del portal y la exposición de información sensible.
- Ajusté la redacción al contexto del informe.
- Revisé las medidas de mitigación para que fueran coherentes con el caso.

---

## Prompt para activos y matriz de riesgo
**Objetivo:** transformar vulnerabilidades técnicas en riesgos de negocio para una inmobiliaria.

**Prompt utilizado:**
> “Ayúdame a identificar activos críticos y construir una matriz de riesgo para Terranova, una inmobiliaria cuyo portal almacena contratos y datos financieros. Quiero convertir SQL Injection, XSS y Command Injection en riesgos de negocio con probabilidad e impacto.”

**Sección relacionada:** `05_activos_floosv.md` y `06_matriz_floosv.md`

**Qué acepté de la respuesta:**
- La identificación de activos críticos.
- La estructura base de probabilidad e impacto.

**Qué corregí o adapté:**
- Ajusté la valoración de activos al contexto de Terranova.
- Definí la clasificación final de riesgos según mi criterio.

---

## 3.7 Prompt para controles y recuperación
**Objetivo:** definir medidas preventivas, de mitigación y recuperación para el portal.

**Prompt utilizado:**
> “Propone políticas de prevención, controles de mitigación y un plan de recuperación para Terranova considerando SQL Injection, XSS y Command Injection en un portal que maneja contratos y datos financieros.”

**Sección relacionada:** `07_controles_floosv.md` y `08_recuperacion_floosv.md`

**Qué acepté de la respuesta:**
- La separación entre prevención, mitigación y recuperación.
- La recomendación de controles por vulnerabilidad.
- La estructura de respuesta a incidentes.

**Qué corregí o adapté:**
- Adapté los controles al contexto del negocio.
- Prioricé la protección de contratos, base de datos y servidor.
- Reformulé el plan.

---

## Reflexión sobre el uso de IA

El uso de IA fue útil para:
- Acelerar la comprensión de la evaluación.
- Estructurar el trabajo.
- Obtener explicaciones técnicas base de las vulnerabilidades.
- Generar borradores que luego fueron refinados.
- Apoyar la organización de la aplicación React.

Sin embargo, también fue necesario revisar cada respuesta. La IA puede entregar explicaciones correctas a nivel general, pero no siempre ajustadas al caso específico de la empresa, a la rúbrica o al tono requerido por un informe académico. Por ello, el trabajo final implicó seleccionar, corregir, contextualizar y reorganizar la información para que representara un análisis propio y coherente con la evaluación.

## Conclusión

La IA fue utilizada como una herramienta de apoyo y no como sustituto del criterio técnico. Su mayor aporte estuvo en la generación de estructuras, explicaciones base y propuestas de redacción, mientras que la contextualización al caso de **Terranova**, la priorización de riesgos, la selección de controles y la coherencia del informe fueron responsabilidad del autor del trabajo.