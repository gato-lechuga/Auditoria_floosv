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

## 2. Objetivo de la auditoría

El objetivo principal de esta auditoría es **evaluar vulnerabilidades de seguridad en un entorno controlado y proponer medidas de prevención, mitigación y recuperación priorizadas mediante una matriz de riesgo**, contextualizando el análisis en la empresa **Terranova** y en los activos de información que protege su portal de clientes.

De forma específica, esta auditoría busca:

- Identificar y demostrar técnicamente tres vulnerabilidades web en DVWA.
- Explicar por qué cada vulnerabilidad funciona desde el punto de vista técnico.
- Evaluar la severidad de cada hallazgo utilizando CVSS v3.1.
- Traducir los hallazgos técnicos a riesgos de negocio para Terranova.
- Identificar los activos de información críticos del portal inmobiliario.
- Proponer políticas de prevención, controles de mitigación y un plan de recuperación ante incidentes.
