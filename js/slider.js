images=[]

const sliderItems=document.querySelector('.slider__items')


const sliderDots=document.querySelector('.slider__dots')


const prevBtn=document.querySelector('.btn__prev')
const nextBtn=document.querySelector('.btn__next')
const dots=document.querySelector('.slider__dots')

let activeItem=0
let handlerClick=true   
let dotsIndex=0

function itemInit(){
    for(var i of  Array.from(sliderItems.children))
{
        images.push(i.src.split('img/')[1])

    }
    const img=document.createElement('img')
    img.src='./img/'+images[activeItem]
    img.style.width="400px";
    img.style.height="400px";

    sliderItems.append(img)
    nextGenerate()
    prevGenerate()
}

function dotsInit(){
    for(let i=0;i<images.length;i++){

        const dot=document.createElement('div')
        dot.className="slider__dot"
        dots.append(dot)

    }
}
itemInit()
dotsInit()




function nextGenerate(){
    let nextItem =activeItem+1
    if(nextItem>=images.length){
        nextItem=0
    }
    const img=document.createElement('img')
    img.src='./img/'+images[nextItem]
    img.className="slider__item";

    sliderItems.append(img)

}
function prevGenerate(){
    let prevItem =activeItem-1
    if(prevItem<0){
        prevItem=images.length-1
    }
    const img=document.createElement('img')
    img.style.width="400px";
    img.style.height="400px";
    img.src='./img/'+images[prevItem]
    sliderItems.prepend(img)
}



function nextSlide(){

    if(handlerClick){
        activeItem++
    if(activeItem>=images.length){
        activeItem=0
    }
    document.querySelector('.slider__items img').remove()
  
    right()
    nextGenerate()
    }
    }

    function pervSlide(){
        if(handlerClick){
        console.log(activeItem)
        activeItem--
        if(activeItem<0){
            activeItem=images.length-1
        }
        document.querySelector('.slider__items img:last-child').remove()
        left()
        prevGenerate()
    }
        }

function right(){
    handlerClick=false

    const elem = document.querySelector('.slider__items');
    let pos = 0;
    const id = setInterval(frame, 1); 

    function frame (){ 
    if (pos == 400) {
        clearInterval(id);
        handlerClick=true

    } else {
        pos+=2; 
        elem.style.left =  -pos + 'px'; 
    }
    }
}
function left(){
    handlerClick=false
    const elem = document.querySelector('.slider__items');
    let pos = 800;
    const id = setInterval(frame, 1); 

    function frame (){ 
    if (pos == 400) {
        clearInterval(id);
        handlerClick=true
    } else {
        pos-=2; // позиция увеличивается.
        elem.style.left =   -pos + 'px'; 
    }
    }
}



nextBtn.addEventListener("click",nextSlide)
prevBtn.addEventListener("click",pervSlide)
