/**
 * La sintaxis de desestructuración es una expresión de JavaScript que permite
 * desempacar valores de arreglos o propiedades de objetos en distintas variables.
 */

// Creacion de un objeto
const miObjetoPersona = {
  nombre: "Cesar",
  apellido: "Cruz",
  edad: 27,
  mascotas: false,
  profesion: 'Programador'
};

const conDesestructuracion = (informacionX) => {
  // Se extraen la propiedades de 'miObjetoPersona' que se requieran
  const { nombre, edad, mascotas } = informacionX;
  // Se hace una validacion ternaria si se tieno mascota
  const tieneMascotas = mascotas ? "si" : "no";
  // Se imprime la informacion con un template literal
  console.log(
    `Mi nombre es ${nombre}, tengo ${edad} años y ${tieneMascotas} tengo mascotas`
  );
};
const sinDesestructuracion = (informacionX) => {
  // Se accede a las propiedades de 'miObjetoPersona'
  console.log(`Mi nombre es ${informacionX.nombre}, y soy ${informacionX.profesion}`);
};

conDesestructuracion(miObjetoPersona);

sinDesestructuracion(miObjetoPersona);
