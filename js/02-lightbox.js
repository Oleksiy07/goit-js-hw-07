import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
    image.addEventListener('click', onImageClick);
    
    function onImageClick(e) {
        e.preventDefault();
        
        const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

    }
});

function createGalleryMarkup(images) {
    return images
    .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}
