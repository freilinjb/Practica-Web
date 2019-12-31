// document.getElementById('formTask');
// console.log(document.getElementById('formTask'));

document.getElementById('formTask').addEventListener('submit', saveTask);
let editar = null;

function saveTask(e) {
    let title = document.getElementById('title').value;

    let descripcion = document.getElementById('descripcion').value;

    const task = {
        title,
        descripcion
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        
        if(editar != null)
        {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks[editar].title = title;
            tasks[editar].descripcion = descripcion;
            editar = null;
        }
        else
        {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            // alert('Se ha guardado correctamente');
        }
    }
    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';
    
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let descripcion = tasks[i].descripcion;
        tasksView.innerHTML += `<div class="card">
            <div class="card-body">
                <p>${title} - ${descripcion}</p>
                <a class="btn btn-danger col-5" style="color: white;" onclick="deleteTask('${title}')">Eliminar</a>
                <a class="btn btn-warning col-5" style="color: white;" onclick="editarTask('${title}')">Editar</a>
            </div>
        </div>`
        console.log(tasks[i]);
    }
}

function editarTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++)
    {
        if(tasks[i].title == title)
        {
            document.getElementById('title').value = tasks[i].title;
            document.getElementById('descripcion').value = tasks[i].descripcion;
            break;
        }
    }
}

function deleteTask(title) {
    // console.log('Preciono: ' + title);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title)
        {
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

getTasks();

// document.getElementById('formTask').addEventListener('submit', function(e){
//     //Prueba 
//     // console.log(e);
//     // alert('Enviando formulario');
//     let title = document.getElementById('title').value;
//     document.getElementById('title').value = ''

//     let descripcion = document.getElementById('descripcion').value;
//     document.getElementById('descripcion').value = '';

//     const task = {
//         title,
//         descripcion
//     };

//     if(localStorage.getItem('tasks') === null)
//     {
//         let tasks = [];
//         tasks.push(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }else {
//         let tasks = JSON.parse(localStorage.getItem('tasks'));
//         tasks.push(task);
//         localStorage.setItem('tasks',JSON.stringify(tasks));
//         alert('Se ha guardado correctamente');
//     }
//     e.preventDefault();

//     //Converte objetos a String
//     // localStorage.setItem('tasks',JSON.stringify(task));
//     // console.log(localStorage.getItem('tasks'));
//     // console.log(JSON.parse(localStorage.getItem('tasks')));

//     // localStorage.setItem('tasks',task);

//     // console.log(task);
// });

