import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"

 const galllery = document.querySelector('.gallery');
 galllery.addEventListener('click', onClick);

 function onClick(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    console.log(evt.target)
}
 
const markup = galleryItems
.map(item => 
    `<div class = "gallery__item">
<a class = "galllery__link" href = "${item.original}">
<img class="gallery__image"
src="${item.preview}"
alt='${item.description}'>
</img>
</a>
</div>
`)
    .join('');

galllery.insertAdjacentHTML('beforeend', markup);



