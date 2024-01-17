
//^ section 4
let menuBotton = document.querySelectorAll('.menuBotton') ;
let starters =document.querySelector('.starters')
let breakfast =document.querySelector('.breakfast')
let lunch =document.querySelector('.lunch')
let dinner =document.querySelector('.dinner')
let button = [starters , breakfast , lunch , dinner]

menuBotton.forEach(element => {
    element.addEventListener('click' , ()=>{
        starters.classList.add('d-none');
        breakfast.classList.add('d-none');
        lunch.classList.add('d-none');
        dinner.classList.add('d-none');
        let elementId = element.id
        button[elementId].classList.remove('d-none')
    })
});