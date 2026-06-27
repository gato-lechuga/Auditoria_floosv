# Cross-Site Scripting Reflected (XSS) — Terranova

## Descripción del ataque

El **Cross-Site Scripting (XSS)** es una vulnerabilidad que permite inyectar código ejecutable, generalmente JavaScript, dentro del contenido que una aplicación web devuelve al navegador del usuario. En la variante **Reflected XSS**, el payload enviado por el atacante es reflejado inmediatamente por la aplicación en la respuesta HTTP y ejecutado por el navegador de la víctima.
    ```html
    <script>alert('hola Osvaldo')</script>


## ¿Qué demuestra este ataque?

El ataque demuetra que la aplicacion **toma la entrada del usuario y la devuelve al navegador sin sanitizar ni codificar correctamente**, permitiendo que el navegador la interprete como código ejecutable en lugar de tratarla como texto.

Aunque el ejemplo utilizado solo genera una alerta, en un escenario real un atacante podría reemplazar ese código por scripts destinados a:

- Robar cookies de sesión.
- Capturar información introducida por el usuario.
- Modificar el contenido visual del portal.
- Redirigir al cliente a un sitio falso.
- Ejecutar acciones en nombre del usuario autenticado.

Explicación técnica de por qué funciona


## Explicación téctnica de por qué funciona
### El XSS reflected funciona cuando la aplicación:

- Recibe una entrada desde un formulario, parámetro GET o POST.
- Incorpora esa entrada en la respuesta HTML.
- No aplica sanitización ni codificación de salida.
- El navegador interpreta la respuesta y ejecuta el script incrustado.

Por ejemplo, si una aplicación genera una salida como:

    Hola <script>alert('hola')</script>
el navegador no lo ve como un texto plano, sino como un bloque de JavaScript válido, y por tanto lo ejecuta.

## Causa raíz

La causa principal de esta vulnerabilidad es la **falta de sanitización** y **escape de la salida**. El sistema no distingue entre contenido seguro y contenido potencialmente malicioso proveniente del usuario.

## Impacto para Terranova

En el contexto de Terranova, una vulnerabilidad XSS en el portal de clientes no debe evaluarse solo como “aparece un alert”, sino como una posibilidad real de comprometer la interacción entre el cliente y el portal.

### Escenarios de impacto en Terranova

Si el portal reflejara código no sanitizado, un atacante podría:

- **Robar sesiones de clientes** si logra acceder a tokens o cookies no protegidas.
- **Suplantar la interfaz del portal**, mostrando formularios falsos para obtener credenciales o datos financieros.
- **Capturar información ingresada por el usuario**, como antecedentes financieros, datos de contacto o información asociada a contratos.
- **Redirigir a clientes a páginas fraudulentas**, aparentando ser parte del servicio inmobiliario.
- **Ejecutar acciones maliciosas** en el contexto de la sesión de la víctima, si existen otras debilidades de seguridad.
### Consecuencias de negocio
- Pérdida de confianza por parte de clientes y propietarios.
- Exposición de información sensible.
- Aumento del riesgo de fraude o suplantación.
- Incidentes reputacionales.
- Interrupción del uso normal del portal.

## Evaluacion CVSS 3.1
La severidad de XSS puede variar según el contexto, pero en un portal que administra información contractual y financiera de clientes, su impacto puede ser significativo.

Vector CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N

| Métrica | Valor | Justificación |
|---------|-------|---------------|
| **Attack Vector (AV)** | **Network (N)** | La vulnerabilidad puede explotarse a través de la red o Internet. |
| **Attack Complexity (AC)** | **Low (L)** | La explotación no requiere condiciones especiales. |
| **Privileges Required (PR)** | **None (N)** | El atacante no necesita autenticarse para explotar la vulnerabilidad. |
| **User Interaction (UI)** | **Required (R)** | Es necesario que la víctima interactúe con contenido malicioso, por ejemplo haciendo clic en un enlace o visitando una página. |
| **Scope (S)** | **Changed (C)** | La explotación puede afectar recursos fuera del componente vulnerable, como la sesión o el navegador del usuario. |
| **Confidentiality (C)** | **Low (L)** | Puede permitir el acceso a información sensible, como cookies o datos de sesión. |
| **Integrity (I)** | **Low (L)** | Puede permitir modificar el contenido mostrado al usuario o ejecutar scripts en su contexto. |
| **Availability (A)** | **None (N)** | No afecta directamente la disponibilidad del sistema. |
| **Puntaje CVSS v3.1** | **6.1 (Media)** | Resultado obtenido al evaluar el vector CVSS correspondiente. |


## Política de prevención
### Sanitización y codificación de salida

Toda información ingresada por el usuario y posteriormente mostrada en el portal debe pasar por procesos de sanitización y codificación adecuados según el contexto de salida (HTML, atributos, JavaScript, URL, etc.).

### Validación de entradas

Se debe validar la entrada del usuario para detectar caracteres, etiquetas o patrones no esperados en campos donde no deberían existir.

### Desarrollo seguro orientado a OWASP

Los desarrolladores del portal de Terranova deben trabajar con lineamientos de seguridad basados en buenas prácticas reconocidas, como las del OWASP Top 10, especialmente en lo relativo a manejo de entrada y salida de datos.

### Revisión de componentes de interfaz

Todo componente que muestre datos provenientes del usuario o de parámetros externos debe revisarse para evitar reflejar contenido no confiable.

## Controles de mitigación
### Escape de contenido en la salida

Es el control más importante para impedir que el navegador interprete como código lo que debería tratarse como texto.

### Content Security Policy (CSP)

La implementación de una política de seguridad de contenido ayuda a reducir el impacto de scripts no autorizados, limitando las fuentes desde las cuales puede ejecutarse JavaScript.

### Cookies seguras

Las cookies de sesión deben utilizar atributos como:

- HttpOnly
- Secure
- SameSite

Esto dificulta el robo o abuso de sesión en caso de explotación de XSS.

### Monitoreo y registro

Es recomendable registrar parámetros sospechosos, errores de renderizado y eventos anómalos en formularios y páginas del portal.

### Endurecimiento de sesión

Se recomienda:

expiración de sesiones;
reautenticación en operaciones sensibles;
protección adicional para cambios de datos críticos.
## Conclusión del hallazgo

El XSS reflected demuestra que una aplicación puede convertirse en un medio para ejecutar código en el navegador de sus propios clientes si no controla correctamente la forma en que muestra datos de entrada. En Terranova, una vulnerabilidad de este tipo tendría un impacto especialmente delicado porque el portal gestiona contratos, datos financieros y la relación digital con el cliente. Aunque su impacto puede ser menor que el de una inyección SQL o una inyección de comandos, sigue siendo una vulnerabilidad de atención prioritaria por su capacidad de afectar la sesión, la confianza y la integridad de la interacción con el portal.