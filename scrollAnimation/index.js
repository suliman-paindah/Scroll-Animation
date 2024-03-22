const  boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxPosition)
checkBoxPosition();

function checkBoxPosition(){
    const triggerBottom  = window.innerHeight / 5 *4;
    boxes.forEach(boxSingle =>{
        const topOfBox = boxSingle.getBoundingClientRect().top;
        if(topOfBox < triggerBottom){
            boxSingle.classList.add('show')
        }
        else boxSingle.classList.remove('show')
    })
}