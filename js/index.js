
/* MOUSEOVER EVENT */
const logo = document.querySelector('h1.logo-heading');

logo.addEventListener('mouseover', event => {
    event.target.style.color = 'orange';
    TweenMax.to('.logo-heading', 1, {left: 600});
    
})

/* KEYDOWN EVENT */
const keydownInput = document.querySelector('.keydown');

function logKey(key) {
    event.target.value = key.code;
}

keydownInput.addEventListener('keydown', logKey);


/* WHEEL EVENT */
const headerImg = document.querySelector('.intro > img');

headerImg.addEventListener('wheel', event => {
    event.target.style.filter = 'hue-rotate(140deg)';
    event.target.style.zIndex = '-10';
})

/* DRAG/DROP EVENT */
const penImg = document.querySelector('.content-section img');

penImg.addEventListener('drag', event => {
    event.preventDefault();
    event.target.src = 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500';
})

/* LOAD EVENT */
window.addEventListener('load', () => console.log('The page has loaded!'));


/* FOCUS EVENT */
const homeLink = document.querySelector('header nav a');


homeLink.addEventListener('focus', event => {
    event.target.style.background = 'lime';
})

/* COPY EVENT */
const headerTitle = document.querySelector('.intro > h2');

headerTitle.addEventListener('copy', event => {
    event.target.style.textTransform = 'uppercase';
})


/* DOUBLE CLICK EVENT */
const headerP = document.querySelector('header p');

headerP.addEventListener('dblclick', event => {
    event.stopPropagation();
    event.target.style.color = 'red';
    headerTitle.style.color = 'blue';
})

/* SELECT EVENT */
const selectInput = document.querySelector('.select');

function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(selection);
}

selectInput.addEventListener('select', logSelection);


/* RESIZE EVENT */
const resizeInput = document.querySelector('.resize');
resizeInput.value = `Width: ${window.innerWidth}`;


window.addEventListener('resize', () => {
    resizeInput.value = `Width: ${window.innerWidth}`;
});




/********************************* STRETCH **********************************/





