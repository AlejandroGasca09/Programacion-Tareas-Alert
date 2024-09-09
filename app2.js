// Iniciamos un Arreglo para almacenar tareas
let tareas = [];

//Funcion para mostrar opciones
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones disponibles"
        1.- Agregar tarea
        2.-Ver todas las tareas
        3.- Marcar las tareas completadas
        4.- Salir
        `));
}

//Funcion para agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea")
    if (nombre){
        let tarea = {
            nombre : nombre,
            completada : false
        };
        tareas.push(tarea)
        alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

// Funcion para mostarlista
function verTreas(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas : \n";
        tareas.forEach((tarea,index) =>{
            mensaje += `${index+1}.- ${tarea.nombre}[${tarea.completada? "Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

//Funcion para marcarTareaCompleta
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el numero para marcar la tarea como completada"));
    if(numero > 0 && numero >= tareas.length){
        tareas[numero-1].completada = true;
        alert(`la tarea ${tareas[numero-1].nombre} ha sido completada`)
    }else{
        alert("Numero de tarea fuera de rango...")
    }

}

// Funcion para manejar nuestro programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTreas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del porgrama....");
                continuar = false;
                break;
            default:
                alert("Funcion no valida inetentar nuevamente");

        }

    }
    alert("Programa finalizado...")
}
iniciarPrograma();