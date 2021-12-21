import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryEl: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".js-lightbox"),
    lightboxImg: document.querySelector(".lightbox__image"),
    btn: document.querySelector(".lightbox__button"),
    lightboxOverlay: document.querySelector(".lightbox__overlay"),
  };
  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
     </a>
     </li> `;
    })
    .join("");
  refs.galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);
  refs.galleryEl.addEventListener("click", openModal);
  function openModal(e) {
    e.preventDefault();
    if (e.target.tagName !== "IMG") return;
    const dataSource = e.target.dataset.source;
    console.log(dataSource);
    // if(e.target.tagName !== "")
    refs.lightbox.classList.add("is-open");
    refs.lightboxImg.src = dataSource;
    document.addEventListener("keydown", closeModalEscape);
  }
  refs.btn.addEventListener("click", closeModal);
  function closeModal(e) {
    refs.lightbox.classList.remove("is-open");
    refs.lightboxImg.src = "";
    document.removeEventListener("keydown", closeModalEscape);
  }
  refs.lightboxOverlay.addEventListener("click", closeModal);
  function closeModalEscape(e) {
    if (e.code === "Escape") {
      closeModal();
    }
  }