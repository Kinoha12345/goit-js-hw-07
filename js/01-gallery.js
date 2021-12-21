import { galleryItems } from './gallery-items.js';
// Change code below this line


// const items = [];
// const div = document.querySelector('.gallery');
// const modal = document.querySelector('.modal');
// const closeBtn = document.querySelector('.closeBtn');
// const modalImg = document.querySelector('.modalImg');
// const hidden = document.querySelector('.isHidden')

// for(let i = 0; i < galleryItems.length; i++) {
//     const item = document.createElement("img");
//     item.src = galleryItems[i].preview;
//     item.alt = galleryItems[i].description;
//     item.classList.add("gallery__item");
//     item.classList.add("gallery__image");
//     item.classList.add("gallery__link");
    
//     items.push(item);
// }
// div.append(...items);



//     modal.style.position = "absolute";
//     modal.style.backgroundColor = "black";
//     modal.style.top = "0";
//     modal.style.left = "0";
//     modal.style.right = "0";
//     modal.style.bottom = "0";
//     modal.style.width = "100%";
//     modal.style.height = "100%";
//     hidden.style.visibility = 'hidden';
    
//     closeBtn.addEventListener("click", () => {
//         modal.classList.add('is_hidden');
//     })


// div.addEventListener("click", fullImg);

// function fullImg(event){
//     if(event.target.nodeName !== "IMG") {
//         return false; 
//     }
    
// }

const gallery = document.querySelector('.gallery');

const itemMurkup = galleryItems.map(galleryItems => {
    return `<a class="gallery__item" href="${galleryItems.original}">
        <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
        </a>`
}).join('')

gallery.insertAdjacentHTML('afterbegin', itemMurkup);

let lightBox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionData:'alt'});



