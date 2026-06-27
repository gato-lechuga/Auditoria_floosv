# Políticas de prevención y controles de mitigación — Terranova

## 1. Introducción

Una auditoría de seguridad no concluye con la identificación de vulnerabilidades; su valor está en proponer medidas concretas para reducir la probabilidad de explotación y disminuir el impacto en caso de incidente. En el caso de **Terranova**, los controles deben alinearse con la protección de **contratos**, **datos financieros**, **portal de clientes**, **base de datos** y **servidor de aplicación**.

En esta sección se presentan medidas de **prevención** y **mitigación** para las vulnerabilidades evaluadas: **SQL Injection**, **XSS Reflected** e **Inyección de comandos**.

## 2. Diferencia entre prevención y mitigación

- **Prevención:** medidas orientadas a evitar que la vulnerabilidad exista o que el ataque sea posible.
- **Mitigación:** medidas orientadas a reducir el impacto, contener la explotación o dificultar su aprovechamiento si la vulnerabilidad ya está presente.

---

## Controles para SQL Injection

## Políticas de prevención

### Uso obligatorio de consultas parametrizadas
Terranova debe establecer como política de desarrollo que todas las consultas a base de datos se construyan mediante **prepared statements** o mecanismos equivalentes, prohibiendo la concatenación directa de entradas del usuario.

### Validación de entradas en backend
Todo dato recibido desde formularios, parámetros de URL o APIs debe validarse en el servidor según:
- Tipo de dato.
- Formato.
- Longitud.
- Rango permitido.

### 3.1.3 Revisión de código en módulos críticos
Los módulos que consultan o modifican contratos, datos financieros o información de clientes deben ser revisados antes de su liberación, con foco en manejo de entradas y consultas a base de datos.

### Capacitación en desarrollo seguro
El equipo técnico debe recibir lineamientos sobre OWASP Top 10, con énfasis en prevención de inyecciones.

## Controles de mitigación

### Principio de mínimo privilegio en la base de datos
La cuenta de la aplicación no debe tener privilegios innecesarios. Si ocurre una explotación, el impacto se reduce al limitar lo que esa cuenta puede consultar o modificar.

### Monitoreo de consultas anómalas
Se deben registrar intentos de entrada sospechosa, errores SQL y patrones de consulta que indiquen exploración o explotación.

### Web Application Firewall (WAF)
Un WAF puede ayudar a bloquear payloads de inyección conocidos antes de que lleguen a la aplicación.

### Segmentación de acceso a información sensible
Los contratos y datos financieros deben estar protegidos por controles de acceso por rol, reduciendo la exposición de datos incluso ante fallas parciales.

---

## Controles para XSS Reflected

## Políticas de prevención

### Sanitización y escape de salida
Toda información que provenga del usuario o de parámetros externos debe ser tratada como no confiable. Antes de mostrarse en pantalla, debe codificarse o escaparse según el contexto de salida.

### Validación de entradas
Los campos del portal deben aceptar únicamente el contenido que corresponda a su propósito. Si un campo espera un nombre, no debería aceptar etiquetas HTML o scripts.

### Diseño seguro de componentes del portal
Las vistas y componentes que muestren datos reflejados o provenientes de solicitudes del usuario deben ser revisados con especial cuidado.

### Capacitación sobre riesgos de scripting
El equipo de desarrollo debe comprender el riesgo de reflejar entradas del usuario en respuestas HTML sin sanitización.

## Controles de mitigación

### Content Security Policy (CSP)
La implementación de una política CSP ayuda a restringir la ejecución de scripts no autorizados y reduce el impacto de un XSS.

### Protección de cookies de sesión
Las cookies del portal deben configurarse con atributos como:
- `HttpOnly`
- `Secure`
- `SameSite`

### Reautenticación en acciones sensibles
Operaciones críticas, como descarga de contratos o modificación de datos financieros, deberían requerir validaciones adicionales.

### Monitoreo de parámetros sospechosos
Se recomienda registrar intentos de envío de payloads con etiquetas `<script>`, atributos peligrosos o patrones de inyección de código.

---

## Políticas de prevención

### Evitar el uso de comandos del sistema con entradas del usuario
Terranova debe establecer como regla de diseño que las funcionalidades del portal no ejecuten comandos del sistema operativo construidos a partir de datos entregados por el usuario.

### Reemplazo por APIs seguras
Cuando una funcionalidad requiera obtener información del sistema, debe utilizarse una API o librería del lenguaje, evitando la shell.

### Listas blancas de entrada
Si un módulo debe recibir un valor como una IP o un identificador, solo se deben aceptar formatos válidos y explícitamente permitidos.

### Revisión de seguridad de componentes de infraestructura
Todo componente que interactúe con el sistema operativo, red, archivos o procesos debe ser considerado de alto riesgo.

## Controles de mitigación

### Ejecución con privilegios mínimos
El proceso de la aplicación debe ejecutarse con permisos restringidos para limitar el impacto de una explotación.

### Aislamiento del entorno
Se recomienda segmentar servicios y, si es posible, ejecutar componentes críticos en entornos aislados.

### Monitoreo del servidor
Deben registrarse:
- Ejecuciones anómalas.
- Errores del sistema.
- Accesos a archivos sensibles.
- Comportamientos inusuales del proceso web.

### Hardening del servidor
Incluye:
- Deshabilitar componentes innecesarios.
- Actualizar el sistema.
- Revisar permisos.
- Proteger credenciales y archivos de configuración.

---

## Controles transversales para Terranova

Además de los controles específicos por vulnerabilidad, Terranova debería implementar medidas generales de seguridad:

### Gestión de parches
Mantener actualizados sistema operativo, servidor web, librerías y dependencias del portal.

### Gestión de respaldos
Realizar respaldos periódicos de:
- Base de datos.
- Contratos.
- Configuraciones críticas.
- Logs relevantes.

### Gestión de accesos
Aplicar control de acceso basado en roles, revisión de privilegios y separación de funciones.

### Registro y trazabilidad
Mantener logs de autenticación, cambios relevantes, errores y eventos de seguridad.

### Pruebas de seguridad periódicas
Incorporar revisiones regulares del portal para detectar nuevas vulnerabilidades o regresiones.

### Concientización del personal
El personal técnico y administrativo debe comprender la importancia de la seguridad en la protección de contratos y datos financieros.

### Priorización recomendada de controles

Con base en la matriz de riesgo, se recomienda implementar con mayor urgencia:

1. Consultas parametrizadas y revisión de módulos de acceso a base de datos.
2. Eliminación de ejecuciones inseguras de comandos del sistema.
3. Sanitización/escape de salida y protección de sesión contra XSS.
4. Monitoreo, logs y alertas sobre eventos sospechosos.
5. Backups, endurecimiento del servidor y plan de recuperación.

## Conclusión

Terranova requiere una estrategia de seguridad que combine **desarrollo seguro**, **controles técnicos**, **monitoreo**, **gestión de accesos** y **capacidad de recuperación**. Las vulnerabilidades identificadas en esta auditoría afectan directamente activos críticos del negocio, por lo que su tratamiento no debe considerarse opcional, sino parte esencial de la continuidad y confiabilidad del portal inmobiliario.