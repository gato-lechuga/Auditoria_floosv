## Introducción

La seguridad de la información no se limita a prevenir ataques, también exige que la organización esté preparada para **responder, contener, recuperar y aprender** de un incidente. En una empresa como **Terranova**, que administra contratos y datos financieros de clientes a través de su portal, la capacidad de recuperación es clave para reducir el impacto operativo, reputacional y comercial de una vulneración.

Esta sección propone un **plan de recuperación ante incidentes** y una serie de **mejoras tecnológicas** orientadas a fortalecer la resiliencia del portal de clientes.

## Objetivo del plan de recuperación

El objetivo del plan es permitir que Terranova:
- Contenga incidentes de seguridad de forma rápida.
- Proteja los datos contractuales y financieros.
- Restablezca la operación del portal en condiciones seguras.
- Preserve evidencia útil para análisis posterior.
- Reduzca el tiempo de interrupción y el impacto sobre clientes.

## Escenarios de incidente considerados

A partir de los hallazgos de la auditoría, se consideran especialmente relevantes los siguientes escenarios:

### Fuga de información por SQL Injection
Exposición de contratos, datos personales y datos financieros almacenados en la base de datos.

### Robo de sesión o fraude mediante XSS
Compromiso de cuentas de clientes, visualización de contenido manipulado o captura de datos desde el navegador.

### Compromiso del servidor por Command Injection
Ejecución de comandos no autorizados, acceso a archivos internos, indisponibilidad del portal o alteración del entorno de aplicación.

## Fases del plan de recuperación

### Preparación
Antes de que ocurra un incidente, Terranova debe contar con:
- Inventario de activos críticos.
- Responsables definidos para respuesta.
- Respaldos verificados.
- Mecanismos de monitoreo y logging.
- Procedimientos documentados de restauración.

### Detección y análisis
Ante señales de incidente, se debe:
- Revisar alertas del sistema y registros.
- Identificar el tipo de vulnerabilidad explotada.
- Determinar qué activos están comprometidos.
- Estimar alcance del incidente (clientes afectados, datos comprometidos, impacto operativo).

### Contención
Las acciones de contención buscan detener o limitar el daño. Dependiendo del incidente, pueden incluir:
- Aislar el servidor afectado.
- Deshabilitar temporalmente funcionalidades vulnerables.
- Bloquear cuentas o sesiones sospechosas.
- Restringir acceso a módulos comprometidos.
- Aplicar reglas temporales en firewall o WAF.

### Erradicación
Una vez contenido el incidente, se deben eliminar las causas o artefactos asociados:
- Corregir la vulnerabilidad explotada.
- Eliminar scripts, accesos o configuraciones maliciosas.
- Rotar credenciales comprometidas.
- Revisar permisos y configuraciones del entorno.

### Recuperación
La recuperación implica restablecer el servicio de forma segura:
- Restaurar respaldos si es necesario.
- Validar integridad de la base de datos y de los contratos.
- Verificar el correcto funcionamiento del portal.
- Monitorear el sistema tras la reactivación.
- Reabrir el acceso a clientes solo cuando el entorno sea confiable.

### Lecciones aprendidas
Tras el incidente, Terranova debe:
- Documentar qué ocurrió.               
- Evaluar tiempos de respuesta.
- Revisar qué controles fallaron.
- Actualizar políticas, procedimientos y configuraciones.
- Incorporar mejoras al ciclo de desarrollo y operación.

## Medidas específicas de recuperación para Terranova

### Ante un incidente de SQL Injection
- Revisar logs de consultas y accesos sospechosos.
- Determinar si hubo extracción de contratos o datos financieros.
- Cambiar credenciales de base de datos si existe sospecha de exposición.
- Corregir la vulnerabilidad mediante consultas parametrizadas.
- Verificar integridad de los datos y restaurar respaldos si se detectan alteraciones.

### Ante un incidente de XSS
- Identificar páginas o parámetros afectados.
- Invalidar sesiones si existe riesgo de robo de cookies o tokens.
- Corregir la salida vulnerable y aplicar sanitización/escape.
- Informar internamente si pudo haberse afectado la experiencia o seguridad del cliente.
- Revisar logs de autenticación y actividad de cuentas potencialmente comprometidas.

### Ante un incidente de Command Injection
- Aislar inmediatamente el servidor o el servicio afectado.
- Revisar archivos accedidos o modificados.
- Analizar si existió escalamiento o persistencia.
- Restaurar el entorno desde una base confiable si es necesario.
- Reemplazar el mecanismo vulnerable por una solución segura sin uso de shell.

## Mejoras tecnológicas recomendadas

### Modernización de prácticas de desarrollo seguro
Terranova debe incorporar controles de seguridad desde el diseño, desarrollo, pruebas y despliegue del portal.

### Fortalecimiento del control de sesiones
Se recomienda:
- Cookies seguras.
- Expiración de sesiones.
- Validaciones adicionales en operaciones sensibles.
- Revisión de autenticación y autorización.

### Segmentación de componentes
Separar lógica de aplicación, base de datos, almacenamiento documental y servicios auxiliares reduce el impacto de un compromiso parcial.

### Monitoreo centralizado
La centralización de logs y alertas permite detectar con mayor rapidez comportamientos anómalos en el portal y el servidor.

### Gestión de respaldos y pruebas de restauración
No basta con tener respaldos; Terranova debe verificar periódicamente que puede restaurarlos de forma efectiva.

### Hardening del servidor
Se recomienda:
- Eliminar servicios innecesarios.
- Actualizar paquetes.
- Revisar permisos.
- Proteger archivos de configuración y secretos.
- Reducir superficie de ataque.

## Roles y responsabilidades sugeridos

| Rol | Responsabilidad |
|---|---|
| Responsable TI / administrador del portal | Coordinar acciones técnicas de contención, análisis y recuperación. |
| Responsable de seguridad o encargado de la auditoría | Evaluar el incidente, priorizar acciones y asegurar trazabilidad. |
| Administración de base de datos | Verificar integridad de la información, respaldos y restauración si corresponde. |
| Gerencia o responsable de negocio | Tomar decisiones operativas y coordinar comunicación interna según el impacto. |
| Soporte / atención al cliente | Canalizar incidencias de usuarios si el portal se ve afectado. |

## Prioridades de recuperación

En caso de incidente, Terranova debería priorizar:

1. Contener el acceso no autorizado o la ejecución maliciosa.
2. Proteger la base de datos y los contratos digitalizados.
3. Asegurar la integridad de la información financiera y contractual.
4. Restablecer el portal en un estado confiable.
5. Monitorear el sistema tras la recuperación.
6. Actualizar controles para evitar recurrencia.

## Conclusión

Dado que el portal de Terranova administra información sensible y procesos relevantes para la relación con sus clientes, la empresa necesita no solo prevenir vulnerabilidades, sino también contar con un plan de recuperación realista. La capacidad de **detectar, contener, restaurar y aprender** frente a incidentes es un componente esencial de la seguridad. Un enfoque maduro de recuperación permitirá a Terranova reducir pérdidas, proteger la confianza de sus clientes y sostener la continuidad de su operación digital.