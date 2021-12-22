import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const itemMurkup = galleryItems.map(galleryItems => {
    return `<a class="gallery__item" href="${galleryItems.original}">
        <img class="gallery__image" src="${galleryItems.preview}" data-source="${galleryItems.original}" alt="${galleryItems.description}" />
        </a>`
}).join('')

gallery.insertAdjacentHTML('afterbegin', itemMurkup);

gallery.addEventListener('click', OpenModel);

function OpenModel(e) {
    e.preventDefault();
    if(e.target.tagName !== "IMG") return false;
    const dataSource = e.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${dataSource}" >
`)

instance.show()
}




