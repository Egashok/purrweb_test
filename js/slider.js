images=[]

const sliderItems=document.querySelector('.slider__items')

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
    const img=document.createElement('img')
    img.src='./img/'+images[activeItem]
    img.className="slider__item";
    
    sliderItems.append(img)

}
function prevGenerate(){
    let prevItem =activeItem-1
    if(prevItem<0){
        prevItem=images.length-1
    }
    const img=document.createElement('img')
    img.style.width="0";
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
   
    nextGenerate()

    right()
    indicators();

    }
    }

    function pervSlide(){
        if(handlerClick){
        activeItem--
        if(activeItem<0){
            activeItem=images.length-1
        }
        prevGenerate()
        left()
        indicators()
    }
        }

function right(){
    handlerClick=false

    let pos = 0;
    const id = setInterval(frame, 5); 
    let del= document.querySelector('.slider__items img')
   

    function frame (){ 
    if (pos == 400) {
        clearInterval(id);
        handlerClick=true
       del.remove()


    } else {
        pos+=5; 

        del.style.width=(400-pos)+'px'

    }
    }
}
function left(){
    handlerClick=false
    let elem=document.querySelector('.slider__items img')   
     let pos = 400;
    const id = setInterval(frame, 1); 
    let del=document.querySelector('.slider__items img:last-child')

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
