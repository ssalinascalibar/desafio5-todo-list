const tareas = [
    {
        id: 16,
        tarea: "Hacer mercado",
        completado: false
    },
    {
        id: 60,
        tarea: "Estudiar para la prueba",
        completado: false
    },
    {
        id: 24,
        tarea: "Sacar a pasear a Tobby",
        completado: false
    }

]

console.log(tareas);
const btnAgregar = document.querySelector('#btnAgregar');
const tareaInput = document.querySelector('#tareaInput');

const totaTareas = document.querySelector('#totaTareas');
let tareasRealizadas = document.querySelector('#tareasRealizadas');

const resumenTareas = document.querySelector('#resumenTareas');

const limpiar = () => (resumenTareas.innerHTML = '');

// const limpiarCheck = () => (check.innerHTML = '');

const mostrarTareas = function (todoList = tareas) {
    limpiar();
    let tbody = ""
    for (let task of todoList) {
        tbody +=  `
        <tr>
        <td>${task.id}</td>
        <td>${task.tarea}</td>
        <td><input class="form-check-input" onclick="realizar(${task.id})" ${task.completado ? "checked" : ""} type="checkbox" value="" id="check"></td>
        <td><button onclick="eliminar(${task.id})">X</button></td>
        </tr>
        `;
    }
    resumenTareas.innerHTML = tbody;
    totalTareas.innerHTML = tareas.length  //contador de tareas
    const realizadas = tareas.filter((task) => task.completado === true); // contador tareas realizadas
    tareasRealizadas.innerHTML = realizadas.length
    
    
}

mostrarTareas();


function realizar(id) {
    tareas.map((ele) => {if (ele.id == id) ele.completado = !ele.completado}) ;
    mostrarTareas()
}


btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: Math.floor(Math.random() * 100), tarea: nuevaTarea, completado: false});
    tareaInput.value = "";  //limpia el input
    
    mostrarTareas()
    // mostrarTareas(tareaInput)
    //  let tbody = ""
    
    
});


function eliminar(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    mostrarTareas()
}

// function realizar(id) {
//         // limpiarCheck();
//         let checked = document.querySelector('#check').checked;
//         const arrayRealizado = [];
//         arrayRealizado.push(checked)
//         console.log(arrayRealizado)
//         if (checked) {
//                 // tareasRealizadas.innerHTML = tareas.length

//                 console.log('ha sido checkeado')
//             } else {
//                     console.log('no ha sido checkeado aún')
//                 }
//             }
            


            // function realizar(id) {
            //     // limpiarCheck();
            //     tareas.map((ele) => {
                //                           if (ele.id == id) ele.completado = !ele.completado
            //     })
            //     mostrarTareas()
                
            // }
            





            
