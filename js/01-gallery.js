import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const itemMurkup = galleryItems.map(({original, preview, description} )=> {
    return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
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




