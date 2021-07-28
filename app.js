let img = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', ]
let imgBg = document.querySelector('.img-slider')
const add = document.querySelector('.fa-angle-right')
const less = document.querySelector('.fa-angle-left')
let counter = 0;


add.addEventListener('click', () =>{
    counter++;
    if (counter === img.length){
        counter = 0  
    }
    imgBg.style.backgroundImage = `url(img/${img[counter]})`

})

less.addEventListener('click', () =>{
    counter--;
    if (counter < 0){
        counter = img.length -1;  
    }
    imgBg.style.backgroundImage = `url(img/${img[counter]})`
})