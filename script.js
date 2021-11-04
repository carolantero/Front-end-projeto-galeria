//ABRIR E FECHAR MENU:
const abrir = document.querySelector('.abrir img');
const fechar = document.querySelector('.fechar img');

const menuUm = document.querySelector('.menu-lateral-um');
const menuDois = document.querySelector('.menu-lateral-dois');
const show = document.querySelector('.show')
const hiden = document.querySelector('.hiden')


abrir.addEventListener('click', function () {
    if (menuUm.classList.contains('show')) {
        menuUm.classList.remove('show');
        menuDois.classList.remove('hiden')
        menuDois.classList.add('show')
        menuUm.classList.add('hiden')
    }
});

fechar.addEventListener('click', function () {
    if (menuDois.classList.contains('show')) {
        menuDois.classList.remove('show');
        menuUm.classList.remove('hiden');
        menuUm.classList.add('show');
        menuDois.classList.add('hiden');
    }
});


//ABRIR E FECHAR MODAL:
const imagensPrincipais = document.querySelectorAll('.img-principal');
const imagemModal = document.querySelector('.image');
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.fechar-modal');


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let mainIndex = 0;

imagensPrincipais.forEach(function (imagem, index) {
    //console.log(index)
    imagem.addEventListener('click', function (event) {

        abrirModal(event.target.src);
        mainIndex = index;
        console.log(mainIndex, 'abrirModal');

        //console.log(index)
    });
});


function abrirModal(src) {
    //console.log(mainIndex)
    modal.style.display = 'flex';
    imagemModal.src = src;
};

function passarPrev(imagem, index) {
    prev.addEventListener('click', function () {
        console.log(mainIndex)

        if (mainIndex > imagensPrincipais.length - 1) {
            mainIndex = imagensPrincipais.length - 1;
        }

        abrirModal(imagensPrincipais[--mainIndex].src);

        console.log(mainIndex, 'passarPrev');

        if (mainIndex <= 0) {
            prev.style.display = 'none'
        }

        if (mainIndex < imagensPrincipais.length - 1) {
            next.style.display = 'block';
        }

    });
}

function passarNext(imagem, index) {


    next.addEventListener('click', function () {

        if (mainIndex < 0) {
            mainIndex = 0;
        }
        abrirModal(imagensPrincipais[++mainIndex].src);

        if (mainIndex >= imagensPrincipais.length - 1) {
            next.style.display = 'none'
        }

        if (mainIndex > 0) {
            prev.style.display = 'block';
        }

    });

};

//console.log(mainIndex)

fecharModal.addEventListener('click', function () {
    // console.log(mainIndex)
    modal.style.display = 'none';

});


passarNext();
passarPrev();


//DAR LIKE:
const heart = document.querySelectorAll('.heart');
const img = document.querySelectorAll('.heart img');
const liked = document.querySelector('.liked')


heart.forEach(function (like) {
    like.addEventListener('click', function (event) {

        if (like.classList.contains('heart')) {
            like.classList.remove('heart')
            like.classList.add('liked')
            event.target.src = "./assets/like.svg";
        } else {
            like.classList.add('heart')
            event.target.src = "./assets/inactive-like.svg"
        }

    });
});







