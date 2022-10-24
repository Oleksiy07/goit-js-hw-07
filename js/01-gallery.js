import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    e.preventDefault();
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    instance.show()
}

function createGalleryMarkup(images) {
    return images
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    })
    .join('');
}

