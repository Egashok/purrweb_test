const cookBtns = document.querySelectorAll('.cookies__btns')
const cookies = document.querySelector('.cookies')
const thank = document.querySelector('.thank')
const form = document.querySelector('.modal')
const contactBtns = document.querySelectorAll('.contact__btn')





for (let i of cookBtns) {
  i.addEventListener("click", closeCookies)
}
function closeCookies() {
  cookies.style.display = 'none'

}
function closeThank() {
  thank.style.display = "none"
}

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('open');
  menu.classList.toggle('open');
  close.style.display = "block"
  body.style.overflow = "hidden"
});

close.addEventListener('click', () => {
  menuList.classList.toggle('open');
  menu.classList.toggle('open');
  close.style.display = "none"
  body.style.overflow = "auto"


});

window.addEventListener('scroll', function () {
  var header = document.querySelector('.hero__top');
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 100) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});

document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('phone').addEventListener('input', validateForm);

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
function validateForm() {
  var submitButton = document.querySelector('.modal__btn');

  if (nameInput.value !== '' && emailInput.value !== '' && phoneInput.value !== '') {

    submitButton.classList.add('valid');
  } else {
    submitButton.classList.remove('valid');
  }
}

function submitForm() {

  showForm()

  if (nameInput.value !== '' && emailInput.value !== '' && phoneInput.value !== '') {

    form.style.display = "none"
    thank.style.display = "block"
  }



}

const nameReq = document.querySelector('.modal__required-name');
const emailReq = document.querySelector('.modal__required-email');
const phoneReq = document.querySelector('.modal__required-phone');
const fullReq = document.querySelector('.modal__required-generics');


function showForm() {
  if (nameInput.value !== '') {
    nameReq.style.display = "none"
    nameInput.classList.remove("input__required")

  }
  else {
    nameReq.style.display = "block"
    nameInput.classList.add("input__required")

  }
  if (emailInput.value !== '') {
    emailReq.style.display = "none"
    emailInput.classList.remove("input__required")

  }
  else {
    emailReq.style.display = "block"
    emailInput.classList.add("input__required")


  }
  if (phoneInput.value !== '') {

    phoneReq.style.display = "none"
    phoneInput.classList.remove("input__required")

  }
  else {
    phoneReq.style.display = "block"
    phoneInput.classList.add("input__required")

  }
  if (nameInput.value !== '' && emailInput.value !== '' && phoneInput.value !== '') {

    fullReq.style.display = "none"
  }
  else {
    fullReq.style.display = "block"
  }

  let error = false


  if (error) {
    validSubmit = false
  }
  else {
    validSubmit = true

  }



}

document.querySelector('.modal__btn').addEventListener('click', function () {

});

let validSubmit = null

for (let i of contactBtns) {
  i.addEventListener("click", openContact)
}

function openContact() {
  form.style.display = "flex"
}

function closeContact() {
  form.style.display = "none"

}

