
## 1. Introducción

Para evaluar adecuadamente el riesgo de seguridad en el portal de clientes de **Terranova**, no basta con identificar vulnerabilidades técnicas; también es necesario determinar **qué activos de información protege la empresa**, cuál es su valor para la operación y qué impacto tendría su compromiso.

En una empresa del rubro **inmobiliario**, la información no solo tiene valor administrativo, sino también **comercial, contractual, financiero y reputacional**. Terranova administra relaciones con clientes, propietarios, arrendatarios y compradores, por lo que la pérdida, alteración o exposición de datos puede afectar directamente el negocio.

## 2. Criterios de valoración

Para cada activo se considera su relevancia respecto de los principios de:

- **Confidencialidad:** necesidad de impedir el acceso no autorizado.
- **Integridad:** necesidad de evitar alteraciones no autorizadas.
- **Disponibilidad:** necesidad de asegurar acceso oportuno al activo.

Se utiliza una valoración cualitativa:
- **Alta**
- **Media**
- **Baja**

## 3. Identificación de activos críticos

| Activo | Descripción | Confidencialidad | Integridad | Disponibilidad | Justificación |
|---|---|---|---|---|---|
| Base de datos de clientes | Repositorio con información personal y operativa de clientes del portal. | Alta | Alta | Alta | Contiene datos sensibles que permiten identificar a clientes y asociarlos a contratos, pagos y operaciones. |
| Contratos inmobiliarios digitalizados | Documentos asociados a arriendos, compraventas u otros acuerdos formales entre Terranova y sus clientes. | Alta | Alta | Media | Son evidencia legal y comercial de la relación con el cliente; su alteración o exposición puede generar conflictos contractuales. |
| Datos financieros de clientes | Información sobre pagos, antecedentes económicos, montos, evaluaciones financieras u otros datos económicos del cliente. | Alta | Alta | Media | Son datos sensibles que impactan directamente la privacidad del cliente y la operación comercial de la inmobiliaria. |
| Portal web de clientes | Plataforma mediante la cual los clientes acceden a información, contratos, estados de trámites y otros servicios. | Media | Alta | Alta | Es el principal canal digital de atención y acceso a información; su caída afecta la operación y la experiencia del cliente. |
| Servidor de aplicación | Infraestructura que aloja la lógica del portal, sus servicios y su procesamiento. | Alta | Alta | Alta | Un compromiso del servidor puede afectar la continuidad del servicio y la seguridad de múltiples activos. |
| Credenciales de acceso y sesiones | Usuarios, contraseñas, tokens o mecanismos de autenticación del portal. | Alta | Alta | Media | Son la puerta de acceso a la información y a las funciones del sistema. |
| Historial de pagos y estados de cuenta | Registros de pagos, deudas, estados financieros o cumplimiento de obligaciones de clientes. | Alta | Alta | Media | Permite gestionar operaciones, seguimiento de clientes y decisiones comerciales. |
| Información de propiedades y operaciones | Datos sobre inmuebles, valores, estados, vinculaciones con clientes y procesos comerciales. | Media | Alta | Media | Aporta valor comercial y operativo; su alteración puede afectar decisiones y trazabilidad. |
| Respaldos de base de datos y documentos | Copias de seguridad de contratos, datos de clientes y registros del portal. | Alta | Alta | Alta | Son esenciales para la recuperación ante incidentes y continuidad operacional. |
| Logs y registros de auditoría | Eventos del sistema, accesos, errores y acciones relevantes dentro del portal. | Media | Alta | Media | Son fundamentales para detectar incidentes, investigar ataques y cumplir trazabilidad. |

## 4. Activos más críticos para esta auditoría

Aunque todos los activos anteriores son importantes, en el contexto de los tres ataques evaluados se consideran especialmente críticos los siguientes:

### Base de datos de clientes
Es el activo más expuesto frente a la **inyección SQL**, ya que una explotación exitosa podría revelar datos personales, contratos y antecedentes financieros.

### Contratos inmobiliarios digitalizados
Su exposición o alteración impactaría directamente la relación legal y comercial entre Terranova y sus clientes.

### Datos financieros de clientes
Su filtración representa un alto riesgo reputacional y de privacidad, además de afectar la confianza en la empresa.

### Portal web de clientes
Es el punto de entrada a la interacción digital con la empresa. Vulnerabilidades como **XSS** afectan directamente la experiencia y seguridad del cliente.

### Servidor de aplicación
Es el activo más comprometido por una vulnerabilidad de **inyección de comandos**, ya que un atacante podría ejecutar instrucciones a nivel del sistema operativo.

## Relación entre activos y vulnerabilidades

### SQL Injection
Afecta principalmente:
- Base de datos de clientes.
- Contratos.
- Datos financieros.
- Historial de operaciones.

### XSS Reflected
Afecta principalmente:
- Portal de clientes.
- Credenciales de acceso.
- Sesiones activas.
- Datos mostrados al cliente.

### Command Injection
Afecta principalmente:
- Servidor de aplicación.
- Archivos internos.
- Credenciales almacenadas.
- Disponibilidad del portal.
- Eventualmente la base de datos y respaldos si el entorno está mal segmentado.

## Conclusión

La identificación de activos permite entender por qué las vulnerabilidades demostradas en DVWA son relevantes para **Terranova**. No se trata únicamente de “fallas técnicas”, sino de amenazas concretas sobre activos que sostienen la operación de la inmobiliaria: **contratos**, **datos financieros**, **portal de clientes**, **base de datos** y **servidor**. Por esta razón, cualquier plan de tratamiento de riesgos debe priorizar la protección de estos activos y alinear los controles de seguridad con el impacto real que tendría su compromiso.