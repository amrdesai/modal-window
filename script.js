'use strict';

// Variables
const modalEl = document.querySelector('.modal');
const bgOverlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

// Function: Toggle Modal
const closeModal = () => {
    modalEl.classList.add('hidden');
    bgOverlay.classList.add('hidden');
};

// Function: Close Modal
const openModal = () => {
    modalEl.classList.remove('hidden');
    bgOverlay.classList.remove('hidden');
};

// Event Listener: Show Modal event
showModalBtns.forEach((currentItem) => {
    currentItem.addEventListener('click', openModal);
});

// Event Listener: Close modal btn event
closeModalBtn.addEventListener('click', closeModal);

// Event Listener: Close modal when clicked on overlay
bgOverlay.addEventListener('click', closeModal);

// Event Listener: Close modal on 'ESC' key press
document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape' && !modalEl.classList.contains('hidden'))
        closeModal();
});
