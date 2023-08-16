/**
 *
 */

// Aquí estamos definiendo una función llamada miFuncionAsincrona.
// Esta función es "asincrónica" debido a la palabra clave async que está antes de la flecha =>.
// Esto significa que puede realizar tareas que pueden llevar tiempo sin bloquear todo el programa
const miFuncionAsincrona = async () => {
  /** En programación, a menudo suceden cosas inesperadas que pueden causar errores.
   * Aquí estamos comenzando un bloque *try* de código que intentará realizar algunas tareas,
   * y si algo sale mal, capturará el error en lugar de hacer que el programa se detenga.
   */
  try {
    /**
     * Aquí estamos usando la palabra clave await para esperar a que se complete una tarea antes de continuar. 
     * La tarea en cuestión es una llamada a la dirección web "https://randomuser.me/api" utilizando la función fetch. 
     * Esta función se utiliza para hacer solicitudes a otros lugares en Internet, como un servidor web, y traer información de vuelta. 
     * En este caso, estamos obteniendo información de usuarios aleatorios.
     */
    const req = await fetch("https://randomuser.me/api");
    /**
     * Aquí nuevamente usamos await para esperar a que se complete una tarea. 
     * Estamos extrayendo la información recibida en la respuesta (req) y convirtiéndola en un formato más fácil de manejar llamado JSON. 
     * JSON es un formato común para intercambiar datos en la web.
     */
    const usuarios = await req.json();
    /**
     * Aquí mostramos y retornamos la información de los ususarios
     */
    console.log(usuarios);
    return usuarios
    /**
     * Si algo salió mal en el bloque de código anterior (por ejemplo, si la solicitud a la dirección web falló), 
     * el programa capturará el error y ejecutará el código dentro de este bloque *catch*.
     */
  } catch (error) {
    /**
     * Aquí simplemente estamos imprimiendo un mensaje en la consola si ocurrió algún error durante el proceso.
     */
    console.log("Algo salio mal al realizar la pericion");
    /**
     * Aquí mostramos y retornamos dicho error con la palabra reservada *throw*.
     */
    console.log(error);
    throw error
  }
};

// Debemos tener una version de node, arriba de la 18.16.1, esto lo podemos revisar en la terminal
// con el comando 'node --version'
miFuncionAsincrona();