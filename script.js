'use strict';

// Variables
const modalEl = document.querySelector('.modal');
const bgOverlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

// Function: Toggle Modal
const toggleModal = () => {
    modalEl.classList.toggle('hidden');
    bgOverlay.classList.toggle('hidden');
};

// Event Listener: Show Modal event listner
showModalBtns.forEach((currentItem) => {
    currentItem.addEventListener('click', toggleModal);
});

// Event Listener: Close modal btn
closeModalBtn.addEventListener('click', toggleModal);

// Event Listener: Close modal when clicked on overlay
bgOverlay.addEventListener('click', toggleModal);

// Event Listener: Close modal if 'ESC' key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        toggleModal();
    }
});
