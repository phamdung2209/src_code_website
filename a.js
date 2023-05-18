// clcik show form signin
// const aTag = document.querySelector('.btn-user-click');
// const divTag = document.querySelector('.modal');

// aTag.addEventListener('click', () => {
//   divTag.style.visibility = 'visible';
// });

function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.visibility = "visible";
}

function offModal(){
    const modal = document.getElementById("myModal");
    modal.style.visibility = "hidden";

    const a = document.querySelectorAll(".inner__btn-main.inner__btn-back");
    for(let i = 0; i < a.length; i++){
        a[i].style.transition = "none";
    }
    const labelInput = document.querySelectorAll(".form__row-label");
    for (let i = 0; i < labelInput.length; i++) {
        labelInput[i].style.transition = "none";
    }
}

function backModal(){
    const modal = document.getElementById("myModal");
    modal.style.visibility = "hidden";
    // const a = document.getElementById("a");
    // a.style.transition = "none";
    // const labelInput = document.getElementById("b");
    // labelInput.style.transition = "none";

    const a = document.querySelectorAll(".inner__btn-main.inner__btn-back");
    for(let i = 0; i < a.length; i++){
        a[i].style.transition = "none";
    }
    const labelInput = document.querySelectorAll(".form__row-label");
    for (let i = 0; i < labelInput.length; i++) {
        labelInput[i].style.transition = "none";
    }
}


function enbEffModal(){
    const enb = document.querySelectorAll(".form__row-label");
    for (let i = 0; i < enb.length; i++) {
        enb[i].style.transition = "0.5s";
    }
}



function changeToSignIn() {
    const signIn = document.querySelectorAll(".modal__inner-signin.modal__inner-signin");
    for (let i = 0; i < signIn.length; i++) {
      signIn[i].style.display = "none";
    }
    const signUp = document.querySelectorAll(".modal__inner-signup.modal__inner-signin");
    for (let i = 0; i < signUp.length; i++) {
      signUp[i].style.display = "block";
    }
}

function changeToSignUp(){
    const signIn = document.querySelectorAll(".modal__inner-signin.modal__inner-signin");
    for(let i = 0; i < signIn.length; i++){
        signIn[i].style.display = "block";
    }
    const signUp = document.querySelectorAll(".modal__inner-signup.modal__inner-signin");
    for (let i = 0; i < signUp.length; i++) {
        signUp[i].style.display = "none";
    }
}