# Matriz de riesgo — Terranova

## 1. Introducción

Una vulnerabilidad técnica no siempre representa el mismo nivel de riesgo para todas las organizaciones. Su impacto depende del contexto del negocio, de los activos afectados y de las consecuencias operativas, legales y reputacionales asociadas a un incidente.

En el caso de **Terranova**, empresa inmobiliaria que custodia **contratos** y **datos financieros de clientes** a través de su portal, los hallazgos identificados en la auditoría deben traducirse a **riesgos de negocio**. Para ello se utiliza una **matriz de riesgo** basada en la combinación de **probabilidad** e **impacto**.

## Criterios de evaluación

### Escala de probabilidad

| Nivel | Descripción |
|---|---|
| Baja | La explotación es poco probable, requiere condiciones difíciles o no existen vectores frecuentes de ataque en la operación normal. |
| Media | La explotación es posible y razonablemente factible si existen errores de implementación, usuarios expuestos o componentes vulnerables. |
| Alta | La explotación es muy probable por facilidad técnica, exposición del sistema o ausencia de controles preventivos robustos. |

### Escala de impacto

| Nivel | Descripción |
|---|---|
| Bajo | El incidente genera molestias menores o impacto acotado sin comprometer activos críticos. |
| Medio | El incidente afecta parte de la operación o expone información de sensibilidad moderada. |
| Alto | El incidente compromete activos relevantes, afecta a clientes o genera impacto operativo/reputacional significativo. |
| Crítico | El incidente compromete información altamente sensible, afecta la continuidad del negocio o genera consecuencias severas para la empresa. |

## Riesgos identificados para Terranova

A partir de las vulnerabilidades evaluadas se identifican los siguientes riesgos:

### Riesgo 1 — Exposición de contratos y datos financieros por SQL Injection
Una vulnerabilidad de inyección SQL en el portal podría permitir a un atacante acceder a información almacenada en la base de datos, incluyendo contratos, antecedentes financieros y datos personales de clientes.

### Riesgo 2 — Suplantación o robo de sesión de clientes por XSS
Una vulnerabilidad de XSS reflected podría ser utilizada para engañar a clientes, capturar información, ejecutar scripts en su navegador o facilitar el robo de sesión.

### Riesgo 3 — Compromiso del servidor por inyección de comandos
Una vulnerabilidad de command injection podría permitir la ejecución de comandos del sistema operativo en el servidor del portal, afectando su seguridad, disponibilidad e integridad.

### Riesgo 4 — Daño reputacional y pérdida de confianza
La exposición de datos contractuales o financieros, así como incidentes visibles para clientes, puede deteriorar la confianza en la empresa y afectar su imagen.

### Riesgo 5 — Interrupción operativa del portal
El compromiso del servidor o la explotación de vulnerabilidades críticas puede provocar indisponibilidad parcial o total del portal de clientes.

## Matriz de evaluación de riesgos

| ID | Riesgo | Vulnerabilidad asociada | Activos afectados | Probabilidad | Impacto | Nivel de riesgo |
|---|---|---|---|---|---|---|
| Riesgo 1 | Exposición de contratos y datos financieros de clientes | SQL Injection | Base de datos, contratos, datos financieros, datos personales | Alta | Crítico | Crítico |
| Riesgo 2 | Robo de sesión o manipulación del navegador del cliente | XSS Reflected | Portal web, sesiones, credenciales, datos mostrados al usuario | Media | Alto | Alto |
| Riesgo 3 | Ejecución de comandos y compromiso del servidor | Command Injection | Servidor, archivos internos, disponibilidad del portal, datos asociados | Media | Crítico | Crítico |
| Riesgo 4 | Daño reputacional por fuga de información o incidente visible | SQL Injection / XSS / Command Injection | Marca Terranova, relación con clientes, confianza comercial | Alta | Alto | Alto |
| Riesgo 5 | Interrupción del servicio del portal de clientes | Command Injection / incidente derivado | Portal web, atención digital, continuidad operativa | Media | Alto | Alto |

## Interpretación de la matriz

## Riesgos críticos
Los riesgos **Riesgo 1** y **Riesgo 3** se consideran críticos porque combinan:
- afectación de activos altamente sensibles;
- impacto severo sobre la operación;
- potencial de daño reputacional y financiero;
- posibilidad de comprometer gran cantidad de información.

### Riesgo 1 — Exposición de contratos y datos financieros por SQL Injection
Este riesgo es crítico porque afecta directamente la **base de datos** del negocio. Dado que Terranova gestiona contratos y antecedentes financieros, una explotación de este tipo puede convertirse rápidamente en un incidente de gran magnitud.

### Riesgo 3 — Compromiso del servidor por inyección de comandos
Este riesgo es crítico porque trasciende la exposición de un dato puntual y compromete la plataforma que soporta el portal. Si el servidor es vulnerado, el atacante podría ampliar el impacto hacia otros activos.

### Riesgos altos
Los riesgos **Riesgo 2**, **Riesgo 4** y **Riesgo 5** se clasifican como altos, ya que aunque no siempre implican control total del sistema, sí pueden producir daños relevantes en clientes, reputación y continuidad del servicio.

## Mapa de calor conceptual

A continuación se presenta una representación textual del mapa de calor de riesgos:

| Probabilidad \ Impacto | Bajo | Medio | Alto | Crítico |
|---|---|---|---|---|
| Alta |  |  | R4 | R1 |
| Media |  |  | R2, R5 | R3 |
| Baja |  |  |  |  |

## Priorización de tratamiento

Con base en la matriz, Terranova debería priorizar sus esfuerzos de tratamiento de la siguiente forma:

### Prioridad 1
- **R1 — Exposición de contratos y datos financieros por SQL Injection**
- **R3 — Compromiso del servidor por inyección de comandos**

### Prioridad 2
- **R2 — Robo de sesión o manipulación del navegador del cliente**
- **R4 — Daño reputacional por fuga de información**
- **R5 — Interrupción del portal de clientes**

## Conclusión

La matriz de riesgo permite traducir hallazgos técnicos a un lenguaje comprensible para la gestión del negocio. En Terranova, la criticidad no radica únicamente en que existan vulnerabilidades, sino en que estas afectan activos centrales del rubro inmobiliario: **contratos**, **datos financieros**, **portal de clientes** y **servidor de aplicación**. Por ello, la organización debe abordar de forma prioritaria los riesgos que pueden derivar en exposición masiva de información o compromiso del entorno operativo.