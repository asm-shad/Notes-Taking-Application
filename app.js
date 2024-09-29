
const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');

addBtn.addEventListener('click', addNote);

function addNote(){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="note bg-base-300 m-4 overflow-hidden transition-shadow duration-300 ease-in-out shadow-lg rounded-md">
            <div class="tool p-2 flex justify-end">
                <i class="save fas fa-save p-1 transition-colors duration-300 ease-in-out hover:text-blue-500"></i>
                <i class="trash fas fa-trash p-1 cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-500"></i>
            </div>
            <div class="bg-base-200">
                    <textarea class="textarea border-none min-h-[220px] w-[300px] resize-none p-3 text-[16px] text-white bg-transparent focus:outline-none" placeholder="Note"></textarea>
            </div>
        </div>
    `
    const save = note.querySelector('.save');
    const trash = note.querySelector('.trash');
    const textarea = note.querySelector('textarea');

    save.addEventListener('click', saveNotes);
    textarea.addEventListener('input', saveNotes);
    trash.addEventListener('click', () => ){
        note.remove();
        saveNotes();
    }

    main.appendChild(note);
}

function saveNotes(){
    const notes = document.querySelectorAll('.note textarea');     
    const data = Array.from(notes).map(note => note.value);
    console.log(notes, data);

    if(data.length === 0){
        localStorage.removeItem('notes');
    } else{
        localStorage.setItem('notes', JSON.stringify(data));
    }
}