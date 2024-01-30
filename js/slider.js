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
function select(){
    if(this.attr>activeItem){
       
        for(var i=Math.abs(this.attr-activeItem)-1;i>=0;i--){
            
            console.log(i)   
            nextSlide()
         handlerClick=true
    
        }
 
    }else
    for(var i=Math.abs(this.attr-activeItem)-1;i>=0;i--){   
        pervSlide()
     handlerClick=true

    }
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
    indicators();

    }
    }

    function pervSlide(){
        if(handlerClick){
        activeItem--
        if(activeItem<0){
            activeItem=images.length-1
        }
        document.querySelector('.slider__items img:last-child').remove()
        
        left()
        prevGenerate()
        indicators()
    }
        }

function right(){
    handlerClick=false

    const elem = document.querySelector('.slider__items');
    let pos = 0;
    const id = setInterval(frame, 5); 

    function frame (){ 
    if (pos == 400) {
        clearInterval(id);
        handlerClick=true

    } else {
        pos+=5; 
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
        pos-=5; // позиция увеличивается.
        elem.style.left =   -pos + 'px'; 
    }
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
