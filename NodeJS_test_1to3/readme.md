# Parte 1: Preguntas Teóricas

### Explica brevemente qué es Node.js y en qué se diferencia de otras tecnologías de servidor.

NodeJS es un entorno de ejecución que permite usar JavaScript en el lado del servidor, y que tiene miles de paquetes (NPM) que un/a programador/a puede utilizar para hacer su trabajo más fácil. En qué se diferencia de otras “tecnologías de servidor” depende de a qué específicamente te refieres cuando dices “tecnologías de servidor”. Si te refieres a otros entornos de ejecución, se diferencia en el lenguaje (NodeJS usa JavaScript, mientras que .NET usa C#, etc, otros entornos usan otros lenguajes). Si te refieres a otros componentes del server-side, NodeJS es el entorno (donde se programa), luego hay bases de datos (donde se almacenan los datos), servidores en sí (que “sirven” respuestas a peticiones del cliente, ejecuta algoritmos, etc) y los lenguajes de programación.

### Menciona tres ventajas principales de usar Node.js en comparación con otros entornos de servidor.

1. **Permite peticiones concomitantes (es no-bloqueante)**, lo que lo hace más eficiente
2. **NPM es la “colección” de paquetes pre-codificados más grande que existe y es open-source**, lo que acelera el tiempo de desarrollo.
3. **Personalmente considero que al utilizar JavaScript, NodeJS me permite un mayor dominio FullStack**, ya que utiliza el mismo lenguaje que en front end.

### ¿Qué es npm? ¿Para qué se utiliza en el desarrollo de aplicaciones Node.js?

Cómo ya mencioné en las 2 cuestiones de arriba, NPM (node package manager, o gestionador de paquetes de node) es una herramienta que permite a programadores y programadoras instalar y manejar paquetes/librerías/módulos que se utilizarán en el desarrollo. Es como un “repositorio” de esos paquetes. Paquetes son módulos externos (es decir, no incluídos en Node.js) que tienen sus propios módulos (dependencias).

Esos paquetes son código pre-desarrollado, se crean por la comunidad, y todos los que instalan se almacenan en un archivo llamado node_modules y la versión utilizada, en un archivo llamado package.json (para que tengas el listado y para que personas colaboradoras puedan asegurarse de tener los mismos módulos instalados).

### Describe el concepto de "callback" en Node.js y su relevancia en la programación asincrónica.

Una callback es una función que se pasa como argumento en otra función. Esa función se “llama” cuando una operación (generalmente de input/output, como un download, leer un archivo, comunicarse con una base de datos, etc.) se completa (o cuando se produce un error). Es importante para la programación asíncrona porque es justamente una de las cosas que permite que sea asíncrona (!), es decir: la ejecución de un programa no se pausa hasta que el proceso anterior se termine. El proceso “anterior” se va ejecutando mientras el programa sigue corriendo, y cuando el proceso termina, se invoca la función callback. Eso presupone mejor desempeño que si la ejecución fuese síncrona y bloqueante, es decir, si se hubiese que esperar cada proceso finalizar para iniciar otro.

### ¿Qué son los módulos en Node.js? Proporciona un ejemplo de cómo puedes importar y utilizar un módulo en una aplicación.

Los módulos son archivos con bloques de código reutilizables que ejecutan una tarea específica. Se utilizan no solo para reutilizar (sin tener que estar repitiéndolo), pero para dejar el código más organizado y fácil de mantener (por ejemplo, si hay cambios) y debuguear. (NPM es uno de los sitios donde puedes descargar módulos para utilizar en tu código). Pueden ser módulos integrados en Node.js o módulos externos (uno de mis externos favoritos para cualquier proyecto es nodemon).

Para importar un módulo y utilizarlo en una aplicación, hay que simplemente:

1. escribir la siguiente línea de exportación en su archivo: `module.exports = nombreDelModulo`
2. requerir (importar) ese archivo en archivos donde quieres utilizarlo, escribiendo: `require('./nombreDelArchivo')`

La función require() acepta un string como argumento. Ese string proporciona el camino del archivo en que estamos al módulo (archivo) que queremos importar.

**Ejemplo:**

```javascript
// screamer.js
const scream = (text) => {
   return text.toUpperCase()
}

module.exports = scream

//socialMediaRant.js
const scream = require('./screamer')
let text = "I don’t agree with you, which means you’re wrong"
let rantify = scream(text)
console.log(rantify)
