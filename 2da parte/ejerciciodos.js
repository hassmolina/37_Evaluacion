// var Persona ={
// 	nombre: "Hassel",
// 	edad: 21,
// 	genero: "Mujer"
// }
// alert(Persona.nombre());

// var Estudiante={
// 	curso: "Español",
// 	grupo: "Sexto"
// }
// alert(Estudiante.curso());
// alert(Estudiante.grupo());

// var Profesor={
// 	asignatura: "Español",
// 	nivel: "6to"
// }
// alert(Profesor.asignatura());
// alert(Profesor.nivel());

function Persona(nombre, edad, genero){
	this.nombre= nombre;
 	this.edad= edad;
 	this.genero= genero;
 }
 var obtDetalles= new Persona("Hassel", 21, "mujer");
 alert("Mi nombre es "+obtDetalles.nombre+" , tengo "+obtDetalles.edad+" años"+ " y soy "+obtDetalles.genero);

function Estudiante(curso, grupo){
	this.curso= curso;
	this.grupo= grupo;
}
var registrar= new Estudiante("Programacion", "B");
alert("El estudiante cursa "+registrar.curso+ " en el grupo "+ registrar.grupo);

function Profesor(asignatura, nivel){
	this.asignatura= asignatura;
	this.nivel= nivel;
}
var asignar= new Profesor("Programacion", "6to");
alert("El profesor da la materia de "+asignar.asignatura+"en el nivel "+asignar.nivel);