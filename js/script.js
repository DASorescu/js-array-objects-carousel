// creiamo un array che contanga tutte le immagini 
const imagesArray = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];



// slider thumbs
let sliderThumbs ="";

// slider Big images
let sliderBig ="";

// ciclo for per riempire il contenitore delle immagini
for(const image of imagesArray){
    
    const img = (`<div class="image-wrapper"><img src="${image.url}" alt="${image.title}"></div>`);
    
    // //THUMBNAILS
    sliderThumbs += img ;
    //// GALLERIA
    sliderBig += (`
    <div class="image-wrapper">
        <div class="image-description">
            <h2>${image.title}</h2>
            <p><strong>${image.description}</strong></p>
        </div>
        <img src="${image.url}" alt="${image.title}">
    </div>`);
}


// variabile per osservare l'immagine attiva

let currentActiveIndex = 0;

// recupero gli slider
const prevButton = document.getElementById("left-slider");
const nextButton = document.getElementById("right-slider");

// recupero dal dom il contenitore della gallery e degli thumbnails           

const arrayContainer = document.getElementById("img-container");
const thumbnails = document.getElementById("thumbnail");

// inserisco lo stringone all'interno della gallery e neggli thumbnails 

arrayContainer.innerHTML = sliderBig;
thumbnails.innerHTML = sliderThumbs;

// seleziono tutte le immagini create nel dom attraverso js

const images = document.querySelectorAll("#img-container .image-wrapper");
const thumbs = document.querySelectorAll("#thumbnail div");


// //Imposto la classe active ad una immagine a mia scelta 
images[currentActiveIndex].classList.add("active");
thumbs[currentActiveIndex].classList.add("active");


// logica slider forward

nextButton.addEventListener("click", function(){

    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");

    currentActiveIndex++

    if(currentActiveIndex === images.length){
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
});

// logica slider backward

prevButton.addEventListener("click", function(){

    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");
    
    if(currentActiveIndex === 0){
        currentActiveIndex = images.length - 1;
    }
    currentActiveIndex--

    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
});


thumbnails.forEach ((thumb , i )=> {
    thumb.addEventListener("click", function(){
        
        images[currentActiveIndex].classList.remove("active");
        thumbs[currentActiveIndex].classList.remove("active");
        
        
        currentActiveIndex = i ;
        
        images[currentActiveIndex].classList.add("active");
        thumbs[currentActiveIndex].classList.add("active");
    });    


});













