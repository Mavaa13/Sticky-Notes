let notes = [];

function agregarNota() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;
    if (noteText.trim() !== '') {
        notes.push(noteText);
        guardarNotas();
        noteInput.value = '';
        mostrarNotas();
    }
}

function mostrarNotas() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
    notes = obtenerNotas();

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerText = note;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => eliminarNota(index);
        
        const editButton = document.createElement('button');
        editButton.innerText = 'Modificar';
        editButton.onclick = () => editarNota(index);

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        noteList.appendChild(li);
    });
}

function eliminarNota(index) {
    notes.splice(index, 1);
    guardarNotas();
    mostrarNotas();
}

function editarNota(index) {
    const nuevaNota = prompt('Modificar nota:', notes[index]);
    if (nuevaNota !== null) {
        notes[index] = nuevaNota;
        guardarNotas();
        mostrarNotas();
    }
}

function guardarNotas() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function obtenerNotas() {
    const notasGuardadas = localStorage.getItem('notes');
    return notasGuardadas ? JSON.parse(notasGuardadas) : [];
}

mostrarNotas();
