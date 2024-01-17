// let tasklist = document.querySelector('.taskChild') ; 
// ^button add liste :
let newClassListe = document.querySelector('#addClassListe');

let taskParent = document.querySelector('.taskParent');
let taskChild = document.querySelector('.taskChild');



//! create a class liste :

let x = 0;
newClassListe.addEventListener('click', () => {
    let col = document.createElement('div');
    col.setAttribute('class', 'taskChild  bg-transparent rounded-2 ms-3 border border-black border-2 p-2')
    col.innerHTML = ' <div class="d-flex border-bottom border-2 border-black pb-1" > <form action=""> <input class="inputparent pe-none w-100 rounded-2 bg-transparent border border-black border-2 rounded-1" value = "Liste Name" type="text"> </form> <i class="plus hoverParent fa-solid fa-plus fs-4 ps-2"></i> <i class="modifierP hoverParent fa-solid fa-pen-to-square fs-4 ps-2"></i> <i class="deleteP hoverParent fa-solid fa-trash fs-4 ps-2 "></i> </div>'
    taskParent.appendChild(col);
    let plus = col.querySelector('.plus');
    let modifierP = col.querySelector('.modifierP');
    let deleteP = col.querySelector('.deleteP');

    col.addEventListener('drop', (s) => {
        let colId = s.dataTransfer.getData('colChild.id');
        console.log(colId);
        let colIdSp = document.getElementById(colId);
        let destination = s.currentTarget
        destination.appendChild(colIdSp)
    })
    col.addEventListener('dragover', dragover)
    function dragover(e) {
        e.preventDefault();
    }

    plus.addEventListener('click', (e) => {
        let colChild = document.createElement('div');
        colChild.setAttribute('id', x)
        colChild.setAttribute('class', ' d-flex justify-content-between w-100 rounded-1 heigt border border-2 border-black mt-1')
        colChild.innerHTML = '<div ><form class="h-100" action=""><input class="textmodifier h-100 rounded-2 bg-transparent  border-0 pe-none" type="text"></form></div><div class="d-flex flex-column "> <i class="done  fa-solid hoverChild fa-square-check pt-1 fs-5 "></i> <i class="modifierC hoverChild fa-solid fa-pen-to-square pt-1 fs-5 "></i>  <i class="deleteC hoverChild fa-solid fa-trash pt-1 fs-5 "></i> </div>'
        e.target.parentElement.parentElement.appendChild(colChild);
        let textmodifier = colChild.querySelector('.textmodifier');
        x++;
        // ******************************
        colChild.setAttribute('draggable', `true`)
        colChild.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('colChild.id', e.target.id);

        })


        // let nameOfTask = prompt('Name of new task');
        textmodifier.value = '' //nameOfTask;

        let done = colChild.querySelector('.done');
        let modifierC = colChild.querySelector('.modifierC');
        let deleteC = colChild.querySelector('.deleteC');

        done.addEventListener('click', (s) => {
            let done = s.target.parentElement.parentElement.querySelector('.done');
            done.parentElement.parentElement.classList.toggle('bg-primary')
            console.log(done.parentElement.parentElement);
        })
        modifierC.addEventListener('click', (s) => {
            let modifierC = s.target.parentElement.parentElement.querySelector('.textmodifier');
            modifierC.classList.toggle("pe-none")
        })
        deleteC.addEventListener('click', (l) => {
            let deleteC = l.target.parentElement.parentElement;
            deleteC.remove()
        })


    })
    modifierP.addEventListener('click', (s) => {
        let inputparent = s.target.parentElement.parentElement.querySelector('.inputparent');
        inputparent.classList.toggle("pe-none")
    })
    deleteP.addEventListener('click', (l) => {
        let divParent = l.target.parentElement.parentElement;
        divParent.remove()
    })

})

//! create a class Liste  child  :


