# Inyección SQL (SQL Injection) — Terranova

## Descripción del ataque

La **inyección SQL** es una vulnerabilidad que ocurre cuando una aplicación construye consultas SQL utilizando directamente datos ingresados por el usuario, sin validación ni parametrización adecuadas. Esto permite que un atacante altere la lógica de la consulta y obtenga acceso a información que no debería estar disponible.

En el laboratorio DVWA se utilizó el módulo **SQL Injection** con el nivel de seguridad configurado en **Low**. El payload utilizado fue:

    sql
    ' OR '1'='1

## Evidencia del ataque

### mostrar evidencia 

## ¿Qué demuestra el ataque?

El payload ' OR '1'='1 busca modificar la condición de una consulta SQL para que esta siempre resulte verdadera. Si la aplicación concatena directamente la entrada del usuario dentro de una sentencia SQL, el resultado puede ser la devolución de múltiples registros, omitiendo la lógica de filtrado prevista por el sistema.

En términos prácticos, el ataque demuestra que la aplicación es vulnerable a la manipulación de consultas SQL y que un usuario no autorizado podría obtener acceso a información almacenada en la base de datos.

La vulnerabilidad funciona porque la aplicación no trata la entrada del usuario como un dato, sino como parte de la instrucción SQL.

Un ejemplo simplificado de consulta vulnerable sería:
    
    SELECT first_name, last_name
    FROM users
    WHERE user_id = '$id';

Si el sistema espera un identificador y el atacante ingresa:
    
    ' OR '1'='1
La consulta resultante podria transformarse en algo equivalente a:
     
    SELECT first_name, last_name
    FROM users
    WHERE user_id = '' OR '1'='1';
Donde la condición '1'='1' siempre es verdadera, por lo que la cláusula **WHERE** deja de filtrar correctamente y la consulta puede devolver los registros disponibles.

## Causa raiz
La causa principal de la vulnerabilidad es:

- Uso inseguro de funciones del sistema.
- Falta de validación estricta de la entrada.
- Dependencia de la shell para ejecutar operaciones que deberían resolverse por medios más seguros.
- Ausencia de listas blancas o controles de restricción.

## Impacto para Terranova

Si el portal de Terranova presentara una vulnerabilidad de **command injection**, el riesgo sería crítico, ya que ya no se trataría solo de un problema de datos visibles al usuario, sino de un posible compromiso del servidor que soporta la operación del portal.

#### Un atacante podría llegar a:

- Leer archivos internos del sistema.
- Buscar credenciales, claves o configuraciones inseguras.
- Alterar archivos o procesos si la cuenta del servicio tiene privilegios excesivos.
- Interrumpir el funcionamiento del portal.
utilizar el servidor comprometido como punto de apoyo para acceder a otros activos internos.

#### Activos que podrían verse afectados
- Servidor del portal de clientes.
- Base de datos o archivos de configuración con credenciales.
- Repositorio de contratos o documentos adjuntos.
- Datos financieros y personales de clientes.
- Disponibilidad general del servicio.

#### Consecuencias de negocio

Una vulnerabilidad de este tipo podría significar:

- Indisponibilidad del portal.
- Exposición de información sensible.
- Daño reputacional severo.
- Interrupción de procesos comerciales.
- Costos de contención, recuperación y revisión de seguridad.
- Pérdida de confianza de clientes y socios.

#### Evaluación CVSS v3.1

Vector  CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:L
| Métrica | Valor | Justificación |
|---------|-------|---------------|
| **Attack Vector (AV)** | **Network (N)** | La vulnerabilidad puede explotarse a través de la red o Internet. |
| **Attack Complexity (AC)** | **Low (L)** | La explotación no requiere condiciones especiales ni complejidad adicional. |
| **Privileges Required (PR)** | **None (N)** | El atacante no necesita autenticarse para explotar la vulnerabilidad. |
| **User Interaction (UI)** | **None (N)** | No requiere que un usuario realice ninguna acción. |
| **Scope (S)** | **Changed (C)** | La explotación puede afectar recursos fuera del componente vulnerable, como la base de datos. |
| **Confidentiality (C)** | **High (H)** | Permite acceder a información sensible almacenada en la base de datos. |
| **Integrity (I)** | **High (H)** | Puede permitir modificar o eliminar información de la base de datos. |
| **Availability (A)** | **Low (L)** | Puede afectar parcialmente la disponibilidad del servicio o de los datos. |
| **Puntaje CVSS v3.1** | **9.1 (Crítica)** | Resultado obtenido al evaluar el vector CVSS correspondiente. |


## Política de prevención

La prevención busca evitar que la vulnerabilidad exista en la aplicación desde su diseño y desarrollo. Para Terranova, las políticas preventivas recomendadas son:

### Política de desarrollo seguro

Todo desarrollo del portal de clientes debe incorporar prácticas de seguridad desde la fase de diseño, especialmente en módulos que consultan bases de datos con información contractual y financiera.

### Uso obligatorio de consultas parametrizadas

Las consultas SQL deben implementarse utilizando prepared statements o mecanismos equivalentes, evitando la concatenación directa de entradas del usuario.

### Validación de entradas

Los parámetros recibidos por formularios, URL o APIs deben validarse según:

- Tipo esperado.
- Longitud.
- Formato.
- Rango permitido.

### Principio de mínimo privilegio

La cuenta de base de datos utilizada por la aplicación debe contar únicamente con los permisos necesarios para operar, evitando privilegios excesivos.

### Revisión de código y pruebas de seguridad

Todo cambio en módulos críticos debe someterse a:

- Revisión de código.
- Pruebas funcionales.
- Pruebas de seguridad orientadas a inyecciones.

### Controles de mitigación

Los controles de mitigación buscan reducir el impacto si una vulnerabilidad existe o si un intento de explotación ocurre.

### Prepared statements / consultas parametrizadas

Constituyen el control técnico principal para separar datos de instrucciones SQL.

### WAF (Web Application Firewall)

Puede ayudar a detectar o bloquear patrones de inyección conocidos antes de que lleguen a la aplicación.

### Monitoreo y alertas

Se recomienda registrar y monitorear:

- Errores de base de datos.
- Consultas anómalas.
- Patrones repetitivos de payloads maliciosos.
- Intentos de enumeración.
 
### Segmentación de acceso a la información

La exposición de datos debe limitarse por perfil, función y necesidad operativa, reduciendo el impacto de una explotación.

### Auditoría y trazabilidad

Las acciones realizadas sobre información contractual y financiera deben quedar registradas para facilitar detección temprana e investigación posterior.

## Conclusiones

La inyección SQL representa uno de los riesgos más graves para el portal de Terranova, debido a que ataca directamente la capa donde se almacenan **contratos** y **datos financieros de clientes**. La vulnerabilidad no solo compromete la confidencialidad, sino que puede convertirse en la puerta de entrada para ataques más profundos. Por ello, su tratamiento debe considerarse **prioridad alta o crítica** dentro del programa de seguridad de la empresa.