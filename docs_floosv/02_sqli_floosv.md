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