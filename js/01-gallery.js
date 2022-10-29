import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"

 const galllery = document.querySelector('.gallery');


const markup = galleryItems
.map(({preview, original, description}) => 
    `<div class = "gallery__item">
<a class = "galllery__link" href = "${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt='${description}'>
</img>
</a>
</div>
`)
    .join('');

galllery.insertAdjacentHTML('beforeend', markup);

galllery.addEventListener('click', handleOpenMpdal);

function handleOpenMpdal(evt) {
   evt.preventDefault();
   if (evt.target.nodeName !== 'IMG') {
       return; //щоб клікало лише по картинці  
   }
   
   
//взяла із файла https://basiclightbox.electerious.com/
// onShow: та onClose: взяла із Options  https://github.com/electerious/basicLightbox#readme
   const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600"> 
`, {
    onShow: (instance) => {window.addEventListener('keydown', onCloseModal)},
	onClose: (instance) => {window.removeEventListener('keydown', onCloseModal)}
});

function onCloseModal(evt) {
    if (evt.code === "Escape") {
        instance.close();
    }
   }
instance.show()
}



