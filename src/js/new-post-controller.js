'use strict';

const fileInput = document.getElementById('media');
const mediaElement = document.querySelector('.new-post-form__add-media');


fileInput.addEventListener('change', () => {
    
    if (fileInput.files && fileInput.files[0]) {
        
        mediaElement.removeChild(mediaElement.children[0]);
        const img = document.createElement('img');

        const reader = new FileReader();
        reader.onload = (e) => img.setAttribute('src', e.target.result);
        reader.readAsDataURL(fileInput.files[0]);
        
        mediaElement.appendChild(img);
        mediaElement.style.height = '100%';
        mediaElement.children[0].classList.add('media-preview');
    }

});