images=[]

const sliderItems=document.querySelector('.slider__items')

const sliderScreen=document.querySelector('.slider__screen')



const prevBtn=document.querySelector('.btn__prev')
const nextBtn=document.querySelector('.btn__next')
const dots=document.querySelectorAll('.slider__dot')

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
itemInit()




function nextGenerate(){
    let nextItem =activeItem+1
    if(nextItem>=images.length){
        nextItem=0
    }
    const img=document.createElement('img')
    img.src='./img/'+images[nextItem]
    img.style.width="400px";
    img.style.height="400px";

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
    console.log(activeItem)
    activeItem++
    if(activeItem>=images.length){
        activeItem=0
    }
    document.querySelector('.slider__items img').remove()
    nextGenerate()
    }

    function pervSlide(){
        console.log(activeItem)
        activeItem--
        if(activeItem<0){
            activeItem=images.length-1
        }
        document.querySelector('.slider__items img:last-child').remove()
        prevGenerate()
        }



nextBtn.addEventListener("click",nextSlide)
prevBtn.addEventListener("click",pervSlide)
