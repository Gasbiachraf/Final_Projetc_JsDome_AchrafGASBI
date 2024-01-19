
//^ video section 1
let sectionVideo = document.querySelectorAll('.section1Video')
let divVideo = document.querySelector('#divVideo')
let boddy = document.querySelector('body')


sectionVideo.forEach(element => {
    element.addEventListener('click' ,()=>{
        divVideo.classList.toggle('d-none')
        boddy.classList.toggle('body')
        
    })
});

//^ video section 
let sectionVideo2 = document.querySelectorAll('.section1Video2')
let divVideo2 = document.querySelector('#divVideo2')
let boddy2 = document.querySelector('body')


sectionVideo2.forEach(element => {
    element.addEventListener('click' ,()=>{
        divVideo2.classList.toggle('d-none')
        
        
    })
});


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

// ^ button navbar Sign up and Log in :

let buttonsignUp = document.querySelectorAll('.signUp')
let signUP = document.querySelector('.signUP')
let logIn = document.querySelector('.logIn')
let signUpLogIn = [signUP , logIn]
buttonsignUp.forEach(element => {
    element.addEventListener('click' , ()=>{
        signUP.classList.add('d-none')
        logIn.classList.add('d-none')
        signUpLogIn[element.id].classList.remove('d-none')
        
    })
});