import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const itemMurkup = galleryItems.map(galleryItems => {
    return `<li>
    <a class="gallery__item" href="${galleryItems.original}">
        <img class="gallery__image" src="${galleryItems.preview}" data-source="${galleryItems.original}" alt="${galleryItems.description}" />
        </a>
        </li>`
}).join('')

gallery.insertAdjacentHTML('afterbegin', itemMurkup);


let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionData:'alt'});