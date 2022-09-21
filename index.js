const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Gracias por aceptar ser mi novia no te arrepentiras :), y no te olvides que te quiero mucho mi vida hermosa, y por ultimo te voy a decir algo obvio que algun dia nos casaremos <3');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`transform(-${randomX}%,-${randomY}%)`);
})