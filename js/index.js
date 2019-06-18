
/* MOUSEOVER EVENT */
const logo = document.querySelector('h1.logo-heading');

logo.addEventListener('mouseover', event => {
    event.preventDefault();
    event.target.style.color = 'orange';
})

/* KEYDOWN EVENT */

const headerTitle = document.querySelector('.intro > h2');

function logKey(key) {
    headerTitle.textContent = key.code;
}

headerTitle.addEventListener('keydown', logKey);


/* WHEEL EVENT */
const headerImg = document.querySelector('.intro > img');

headerImg.addEventListener('wheel', event => {
    event.target.style.filter = 'hue-rotate(140deg)';
})

/* DRAG/DROP EVENT */
const penImg = document.querySelector('.content-section img');
const boatImg = document.querySelector('.dropzone');



penImg.addEventListener('drag', event => {
    event.preventDefault();
    event.target.src = 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500';
})

/* LOAD EVENT */
window.addEventListener('load', () => console.log('The page has loaded!'));









