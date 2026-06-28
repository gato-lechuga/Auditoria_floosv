# Informe de Auditoría de Seguridad Web — Terranova

## 1. Resumen ejecutivo

**Terranova** es una empresa del rubro inmobiliario que dispone de un portal web de clientes, el cual se utiliza para la gestion de información asociada a sus operaciones comerciales. Entre los datos que custodia este portal se encuentran **contratos de arriendo, compra y venta**, además de **datos financieros de clientes**, tales como antecedentes de pago, capacidad financiera, montos asociados a operaciones y otra información sensible utilizada para la evaluación y formalización de servicios inmobiliarios.

En el contexto de la asignatura **TI3034 — Fundamentos de Seguridad de la Información**, se realizó una **auditoría de seguridad web en un ambiente controlado**, utilizando la aplicación deliberadamente vulnerable **DVWA (Damn Vulnerable Web Application)**. El propósito de esta actividad fue identificar vulnerabilidades, demostrar su explotación de forma ética y controlada, evaluar su gravedad e interpretar su impacto desde la perspectiva del negocio de Terranova.

La auditoría consideró la ejecución de tres ataques sobre DVWA, todos con el nivel de seguridad configurado en **Low**, con el fin de evidenciar vulnerabilidades frecuentes en aplicaciones web:

1. **Inyección SQL (SQL Injection)**  
   Demuestra la posibilidad de manipular consultas a la base de datos para acceder a información que debería estar protegida.

2. **Cross-Site Scripting Reflejado (XSS Reflected)**  
   Demuestra la posibilidad de inyectar código JavaScript que se ejecuta en el navegador de la víctima.

3. **Inyección de comandos (Command Injection)**  
   Demuestra la posibilidad de ejecutar comandos del sistema operativo a través de una entrada no validada.

## Objetivo de la auditoría

El objetivo principal de esta auditoría es **evaluar vulnerabilidades de seguridad en un entorno controlado y proponer medidas de prevención, mitigación y recuperación priorizadas mediante una matriz de riesgo**, contextualizando el análisis en la empresa **Terranova** y en los activos de información que protege su portal de clientes.

De forma específica, esta auditoría busca:

- Identificar y demostrar técnicamente tres vulnerabilidades web en DVWA.
- Explicar por qué cada vulnerabilidad funciona desde el punto de vista técnico.
- Evaluar la severidad de cada hallazgo utilizando CVSS v3.1.
- Traducir los hallazgos técnicos a riesgos de negocio para Terranova.
- Identificar los activos de información críticos del portal inmobiliario.
- Proponer políticas de prevención, controles de mitigación y un plan de recuperación ante incidentes.

## Contexto de negocio: Terranova

Terranova opera como una inmobiliaria que administra procesos vinculados con la publicación de propiedades, la relación con clientes, la formalización de contratos y la administración de antecedentes económicos asociados a arrendamientos, compraventas y otros servicios del rubro.

Su portal de clientes representa un activo central del negocio, ya que a través de él se puede acceder a información como:

- Datos personales de clientes.
- Contratos inmobiliarios digitalizados.
- Historial de pagos y antecedentes financieros.
- Información de propiedades asociadas a clientes y operaciones.
- Estados de solicitudes y trámites comerciales.

Debido a la naturaleza de esta información, Terranova requiere garantizar los principios de **confidencialidad, integridad y disponibilidad**. Una vulnerabilidad explotada en este portal podría provocar fuga de datos sensibles, alteración de contratos, suplantación de identidad de clientes, daño reputacional e interrupción operativa.

## Hallazgos principales

### Inyección SQL
La vulnerabilidad de **SQL Injection** permitió manipular una consulta a la base de datos mediante el payload `' OR '1'='1`, obteniendo como resultado el acceso a múltiples registros. En un escenario equivalente dentro del portal de Terranova, esta vulnerabilidad podría permitir la **exposición de contratos, datos financieros y datos personales** de clientes.

### XSS Reflected
La vulnerabilidad de **Cross-Site Scripting Reflejado** permitió ejecutar código JavaScript en el navegador de la víctima mediante el payload `<script>alert('hola Osvaldo')</script>`. En el contexto de Terranova, una falla de este tipo podría facilitar el **robo de sesión**, la **suplantación de clientes** o la **captura de información sensible** introducida en formularios del portal.

### Inyección de comandos
La vulnerabilidad de **Command Injection** permitió ejecutar comandos del sistema operativo utilizando el payload `127.0.0.1; cat /etc/passwd`. En un escenario real, una vulnerabilidad de esta naturaleza podría comprometer el **servidor del portal**, exponer archivos internos, facilitar movimientos laterales y poner en riesgo la disponibilidad del servicio y la seguridad de la información almacenada.

## Conclusión general

Los resultados obtenidos demuestran que vulnerabilidades aparentemente “técnicas” pueden transformarse en **riesgos críticos de negocio** cuando afectan un portal que custodia información contractual y financiera, como ocurre en Terranova. La explotación de SQL Injection, XSS y Command Injection evidencia debilidades en validación de entradas, tratamiento seguro de datos, separación de privilegios y protección del entorno de ejecución.

A partir de los hallazgos, se concluye que Terranova debe fortalecer de forma prioritaria sus prácticas de **desarrollo seguro**, **protección de la base de datos**, **sanitización de entradas**, **seguridad de sesiones**, **segmentación de privilegios** y **respuesta ante incidentes**. Asimismo, es necesario implementar una **matriz de riesgo** que permita priorizar las medidas de seguridad según el impacto real sobre los activos del negocio.

## Alcance y consideraciones éticas

Esta auditoría fue realizada exclusivamente en un ambiente controlado y autorizado, utilizando DVWA como laboratorio de práctica. Las técnicas descritas en este informe tienen fines **formativos y defensivos**, y no deben aplicarse sobre sistemas reales sin autorización expresa. 