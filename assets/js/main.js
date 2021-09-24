//Solicitando al usuario su Nombre , Apellido y Carrera
const nombre = prompt("Cual es tu nombre?");
const apellido = prompt("Cual es tu apellido?");
const carrera = prompt("Cual es tu carrera?");

//Pidiendo al Usuario su Primer Ramo
const ramo1 = prompt("Indica tu Ramo 1");

// Ingresando la primera nota del Ramo 1
const nota1_ramo1 = parseInt(prompt("Ingrese la Nota 1 del ramo: " + ramo1));
// Ingresando la segunda nota del Ramo 1
const nota2_ramo1 = parseInt(prompt("Ingrese Nota 2 del ramo: " + ramo1));

// Ingresando la tercera nota del Ramo 1
const nota3_ramo1 = parseInt(prompt("Ingrese Nota 3 del ramo " + ramo1));

//Calculando el promedio de Notas Ramo 1
const prom_Ramo1 = ((nota1_ramo1 + nota2_ramo1 + nota3_ramo1) / 3).toFixed(2);

//Pidiendo al Usuario su Segundo Ramo
const ramo2 = prompt("Indica tu Ramo 2");

// Ingresando la primera nota del Ramo 2
const nota1_ramo2 = parseInt(prompt("Ingrese Nota 1 del ramo " + ramo2));

// Ingresando la segunda nota del Ramo 2
const nota2_ramo2 = parseInt(prompt("Ingrese Nota 2 del ramo " + ramo2));

// Ingresando la tercera nota del Ramo 2
const nota3_ramo2 = parseInt(prompt("Ingrese Nota 3 del ramo " + ramo2));

//Calculando el promedio de Notas Ramo 2
const prom_Ramo2 = ((nota1_ramo2 + nota2_ramo2 + nota3_ramo2) / 3).toFixed(2);

//Pidiendo al Usuario su Tercer Ramo
const ramo3 = prompt("Indica tu Ramo 3");

// Ingresando la primera nota del Ramo 3
const nota1_ramo3 = parseInt(prompt("Ingrese Nota 1 del ramo: " + ramo3));

// Ingresando la segunda nota del Ramo 3
const nota2_ramo3 = parseInt(prompt("Ingrese Nota 2 del ramo: " + ramo3));

//Ingresando nota de Aprobación
const notaDeAprobacion = prompt("Ingrese la nota de aprobación", "4");

//Calculo de Nota Pendiente
const nota_pendiente = (
  3 * notaDeAprobacion -
  (nota1_ramo3 + nota2_ramo3)
).toFixed(2);

document.write(`
<div class="container">
<h1>Notas Finales<h1>

<h6>Nombre: ${nombre}<h6>
<h6>Apellido: ${apellido}<h6>
<h6>Carrera: ${carrera}<h6>
</div>
`);

document.write(`
<div class="container">
<table class="table">
  <thead  class="bg-dark text-white">
    <tr>
    <th scope='col'>Ramo</th>
    <th scope='col'>Nota 1</th>
    <th scope='col'>Nota 2</th>
    <th scope='col'>Nota 3</th>
    <th scope='col'>Promedio</th>
    </tr>
  </thead>
  
  <tbody>
  <tr>
  <th scope='row'>${ramo1}</th>
    <td>
    ${nota1_ramo1}
    </td>
    <td>
    ${nota2_ramo1}
    </td>
    <td>
    ${nota3_ramo1}
    </td>
    <td>
    ${prom_Ramo1}
    </td>
  </tr>

  <tr>
  <th scope='row'>${ramo2}</th>
    <td>
    ${nota1_ramo2}
    </td>
    <td>
    ${nota2_ramo2}
    </td>
    <td>
    ${nota3_ramo2}
    </td>
    <td>
    ${prom_Ramo2}
    </td>
  </tr>

  <tr>
  <th scope='row'>${ramo3}</th>
    <td>
    ${nota1_ramo3}
    </td>
    <td>
    ${nota2_ramo3}
    </td>
    <td>
     -
    </td>
    <td>
    -
    </td>
  </tr>
  
  
  </table>
  </tbody>
</div>

`);

document.write(`
  <div class="container">
  Para aprobar con ${notaDeAprobacion} necesitas un ${nota_pendiente} en la nota 3. 
  </div>
  `);
