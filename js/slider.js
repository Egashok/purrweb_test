images=[]

const sliderItems=document.querySelector('.slider__items')

const prevBtn=document.querySelector('.btn__prev')
const nextBtn=document.querySelector('.btn__next')
const dots=document.querySelector('.slider__dots')

let activeItem=0
let handlerClick=true   
let scrollMany=false


function itemInit(){
    for(var i of  Array.from(sliderItems.children))
    {
        images.push(i.src.split('img/')[1])
    }  
    const img=document.createElement('img')
    img.src='./img/'+images[0]
    img.className="slider__item";
    sliderItems.append(img)
    nextGenerate()
    prevGenerate()

}
function select() {
    scrollMany=true
    let diff = Math.abs(this.attr - activeItem);
    if (this.attr > activeItem) {
        for (var i = diff - 1; i >= 0; i--) {
            nextSlide()
            handlerClick=true
        }
    } else {
        for (var i = diff - 1; i >= 0; i--) {
            pervSlide();
            handlerClick=true
        }
    }
    scrollMany=false
    handlerClick = true;
}


function dotsInit(){

    for(let i=0;i<images.length;i++){

        const dot=document.createElement('div')
        dot.className="slider__dot"
        dot.attr=i
        dot.addEventListener("click",select)
        dots.append(dot)

    }
   

indicators()}
itemInit()
dotsInit()
function nextGenerate(){
    let nextItem=activeItem+1
    if(nextItem>=images.length){
        nextItem=0
    }
    const img=document.createElement('img')
    img.src='./img/'+images[nextItem]
    img.className="slider__item";
    sliderItems.append(img)
}
function prevGenerate(w=false){
    let prevItem =activeItem-1
    if(prevItem<0){
        prevItem=images.length-1
    }
    const img=document.createElement('img')
    img.style.height="400px";
    img.style.width="400px";
    if(w) img.style.width="0px";

    img.src='./img/'+images[prevItem]
    sliderItems.prepend(img)

}

function nextSlide(){
    if(handlerClick){
        activeItem++
        if(activeItem>=images.length){
            activeItem=0
        }
      let del= document.querySelector('.slider__items img')
        right(del)
        nextGenerate()
        indicators()
    }
    }

function pervSlide(){
    if(handlerClick){

        activeItem--
        if(activeItem<0){
            activeItem=images.length-1
        }
        let del=document.querySelector('.slider__items img:last-child')
        prevGenerate(true)
        left(del)
        indicators()
        
    }
    }

function right(del){
  if(!scrollMany){
    let pos = 0;
    const id = setInterval(frame, 5); 
            handlerClick=false

    function frame (){ 
    if (pos == 400) {
        clearInterval(id);
        handlerClick=true
        del.remove()

    } else {
        pos+=5
        del.style.width=(400-pos)+'px'

    }
  }
    }
    else{
            del.remove()
        
    }
}
function left(del){
    let elem=document.querySelector('.slider__items img')
    if(!scrollMany){
        handlerClick=false
        let pos = 400;
    const id = setInterval(frame, 1); 

    function frame (){ 
  
    if (pos == 0) {
        clearInterval(id);
        handlerClick=true    
        del.remove()
          
    } else {
        pos-=5;
        elem.style.width=400-pos+'px'
    }
    }
    }else {
        elem.style.width="400px"
        del.remove()

    }
}


function indicators(){
    let doters=document.querySelectorAll('.slider__dot')
    for(i = 0; i < doters.length; i++){
        doters[i].className = doters[i].className.replace(' active', '');
    }

    doters[activeItem].className += ' active';
}


nextBtn.addEventListener("click",nextSlide)
prevBtn.addEventListener("click",pervSlide)
