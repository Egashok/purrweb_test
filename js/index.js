const cookBtns=document.querySelectorAll('.cookies__btns')
const cookies=document.querySelector('.cookies')
const thank=document.querySelector('.thank')
const form=document.querySelector('.modal')
const contactBtns=document.querySelectorAll('.contact__btn')


let validSubmit=null

for(let i of contactBtns){
  i.addEventListener("click",openContact)
}
function openContact(){
  form.style.display="flex"
}

function closeContact(){
  form.style.display="none"

}

function submitForm(){

  validateForm()

  if(validSubmit ){
    form.style.display="none"
  thank.style.display="block"
  }


}


for(let i of cookBtns){
  i.addEventListener("click",closeCookies)
}
function closeCookies(){
  cookies.style.display='none'

}
function closeThank(){
  thank.style.display="none"
}

function validateForm() {
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;
      const nameInp = document.getElementById('name');
      const emailInp = document.getElementById('email');
      const phoneInp = document.getElementById('phone');

      let fieldsVal=[name,email,phone]

      let fields=[nameInp,emailInp,phoneInp]
      let error=false

  console.log(validSubmit)
  for(var i=0; i<fieldsVal.length;i++){
    
    if(fieldsVal[i].trim() === '' ){
      if(validSubmit || validSubmit==null){
        let error=document.createElement('p')
      error.innerHTML ="This field is required."
      error.classList.add('modal__required')
      fields[i].parentNode.insertBefore(error, fields[i].nextSibling)
      }
      error=true
    }
  }
  if(error){
    validSubmit=false
  }
  else{
    validSubmit=true
  }


  
}


const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('open');
  menu.classList.toggle('open');
  close.style.display="block"
});

close.addEventListener('click', () => {
  menuList.classList.toggle('open');
  menu.classList.toggle('open');
  close.style.display="none"

});