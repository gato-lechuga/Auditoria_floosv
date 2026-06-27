# Inyección de comandos (Command Injection) — Terranova

## Descripción del ataque

La **inyección de comandos** es una vulnerabilidad que ocurre cuando una aplicación utiliza datos ingresados por el usuario para construir o ejecutar comandos del sistema operativo sin una validación estricta. Si la entrada no es controlada, un atacante puede inyectar operadores o comandos adicionales y lograr que el servidor ejecute acciones no previstas por la aplicación.

En DVWA se utilizó el módulo **Command Injection** con el nivel de seguridad configurado en **Low**. El payload utilizado fue:
      
        ```
       127.0.0.1; cat /etc/passwd

### ¿Qué demuestra este ataque?

El payload utilizado combina una entrada aparentemente legítima **(127.0.0.1)** con un separador de comandos **(;)** seguido de un segundo comando **(cat /etc/passwd)**.

Esto demuestra que la aplicación:

- Ejecuta comandos del sistema operativo a partir de la entrada del usuario.
- No valida correctamente caracteres especiales o secuencias peligrosas.
- Permite que el atacante agregue instrucciones adicionales.

En un entorno real, este tipo de vulnerabilidad puede ser extremadamente grave, ya que puede conducir al compromiso del servidor, la lectura de archivos internos, la enumeración del sistema y la preparación de ataques más complejos.

### Causa raíz

La causa principal de la vulnerabilidad es:

- Uso inseguro de funciones del sistema.
- Falta de validación estricta de la entrada.
- Dependencia de la shell para ejecutar operaciones que deberían resolverse por medios más seguros.
- Ausencia de listas blancas o controles de restricción.

## Impacto para Terranova

Si el portal de Terranova presentara una vulnerabilidad de **command injection**, el riesgo sería **crítico**, ya que ya no se trataría solo de un problema de datos visibles al usuario, sino de un posible compromiso del servidor que soporta la operación del portal.

### Riesgos concretos para Terranova

Un atacante podría llegar a:

- Leer archivos internos del sistema.
- Enumerar usuarios, rutas, configuraciones y componentes instalados.
- Buscar credenciales, claves o configuraciones inseguras.
- Alterar archivos o procesos si la cuenta del servicio tiene privilegios excesivos.
- Interrumpir el funcionamiento del portal.
- Utilizar el servidor comprometido como punto de apoyo para acceder a otros activos internos.

### Activos que podrían verse afectados
- Servidor del portal de clientes.
- Base de datos o archivos de configuración con credenciales.
- Repositorio de contratos o documentos adjuntos.
- Datos financieros y personales de clientes.
- Disponibilidad general del servicio.

### Consecuencias de negocio

Para Terranova, una vulnerabilidad de este tipo podría significar:

- Indisponibilidad del portal.
- Exposición de información sensible.
- Daño reputacional severo.
- Interrupción de procesos comerciales.
- Costos de contención, recuperación y revisión de seguridad.
- Afectación de la confianza de clientes y socios.

## Evaluación CVSS 3.1 

Vector CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

| Métrica CVSS v3.1 | Valor | Descripción |
|-------------------|-------|-------------|
| **Attack Vector (AV)** | **Network (N)** | La vulnerabilidad puede explotarse remotamente a través de la red. |
| **Attack Complexity (AC)** | **Low (L)** | La explotación no requiere condiciones especiales ni conocimientos avanzados. |
| **Privileges Required (PR)** | **None (N)** | El atacante no necesita autenticación previa. |
| **User Interaction (UI)** | **None (N)** | No se requiere la intervención de un usuario legítimo. |
| **Scope (S)** | **Unchanged (U)** | El impacto permanece dentro del mismo componente vulnerable. |
| **Confidentiality (C)** | **High (H)** | Existe acceso no autorizado a información sensible. |
| **Integrity (I)** | **High (H)** | Es posible modificar, eliminar o alterar información y configuraciones del sistema. |
| **Availability (A)** | **High (H)** | La vulnerabilidad puede afectar gravemente la disponibilidad del servicio. |
| **Puntaje Base** | **9.8** | **Severidad: Crítica** |
| **Vector CVSS v3.1** | **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H** | Vector correspondiente a una vulnerabilidad de inyección de comandos explotable remotamente. |

## Política de prevención
### Prohibición de uso inseguro de comandos del sistema

Las aplicaciones del portal de Terranova no deben ejecutar comandos del sistema operativo construidos a partir de entradas del usuario, salvo que exista una necesidad técnica justificada y un control estricto de seguridad.

### Uso de APIs seguras

Siempre que sea posible, las funciones requeridas deben implementarse mediante librerías o APIs del lenguaje, evitando el uso de shell o comandos externos.

### Validación estricta y listas blancas

Si una funcionalidad requiere recibir un dato como una IP o nombre de host, la aplicación debe aceptar únicamente formatos válidos y esperados, rechazando cualquier carácter o secuencia fuera del patrón permitido.

### Principio de mínimo privilegio

El proceso de la aplicación no debe ejecutarse con permisos innecesarios sobre el sistema operativo.

### Revisión de componentes críticos

Los módulos que interactúan con el sistema operativo, el sistema de archivos o herramientas de administración deben ser tratados como componentes de alto riesgo y revisados con mayor rigurosidad.

## Controles de mitigación
### Eliminación del uso de shell cuando no sea imprescindible

Es el control más efectivo: reemplazar la ejecución de comandos por mecanismos internos del lenguaje o la plataforma.

### Restricción de entrada mediante listas blancas

Solo deben aceptarse valores que cumplan exactamente el formato esperado.

### Aislamiento del proceso

Se recomienda ejecutar la aplicación en entornos aislados, con permisos mínimos y separación respecto de otros servicios o datos críticos.

### Monitoreo de actividad del servidor

El monitoreo debe detectar:

- Comandos anómalos;.
- Errores de ejecución.
- Accesos a archivos sensibles.
- Comportamientos inusuales del proceso de la aplicación.

## Conclusión del hallazgo

La inyección de comandos es una de las **vulnerabilidades más peligrosas** evaluadas en esta auditoría, ya que trasciende la capa de aplicación y puede **comprometer directamente el servidor** que soporta el portal de Terranova. Dado que este portal administra información contractual y financiera de clientes, una vulnerabilidad de este tipo debe considerarse de **prioridad crítica**, tanto por su potencial de explotación como por el impacto operativo y reputacional que podría generar en la empresa.