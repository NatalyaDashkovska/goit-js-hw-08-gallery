  
import images from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');

const addList = images.map((img, i) => {
    const galleryListRef = document.createElement('li');
    const galleryLinkRef = document.createElement('a');
    const galleryImageRef = document.createElement('img');


  galleryLinkRef.appendChild(galleryImageRef);
  galleryListRef.appendChild(galleryLinkRef);

  galleryListRef.classList.add('gallery__item');
  galleryLinkRef.classList.add('gallery__link');
    galleryImageRef.classList.add('gallery__image');
      galleryImageRef.src = img.preview;
  galleryImageRef.alt = img.description;
    galleryLinkRef.href = img.original;
    

    
galleryImageRef.setAttribute('data-source', img.original);
    

    return galleryListRef;
});

galleryRef.append(...addList);

const openModalRef = document.querySelector('.js-lightbox');
const imgModal = document.querySelector('.lightbox__image');


galleryRef.addEventListener('click', openModal);


      

function openModal(event) {
  event.preventDefault();
 

  if (event.target.nodeName === 'IMG') {
    openModalRef.classList.add('is-open');

      imgModal.src = event.target.dataset.source;
      
    //   console.log(event.target.dataset.source)


  }
}

const closeButtonRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);

function closeModal(event) {
  if (event.target === event.currentTarget) {
    openModalRef.classList.remove('is-open');
    imgModal.removeAttribute('src');
  }
}

closeButtonRef.addEventListener('click', closeModal);