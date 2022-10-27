import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"

 const list = document.querySelector('.gallery');

const markup = galleryItems
.map(item => 
    `<ul>
<li>
<img class="picture" src=${item.preview} width = '200' alt='${item.description}'></img>
</li>
</ul>`)
    .join('');

    list.insertAdjacentHTML('beforeend', markup);


const pictures = document.querySelectorAll('.picture');

list.style.display = 'flex';
list.style.flexWrap = 'column-reverse';
list.style.listStyle = 'none';
list.style.gap = '20px';
list.style.justifyContent = 'center';