/* ImmaginiArr = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]*/

let app = new Vue({
    el: "#app",
    data: {
        corrente : 0,
        schedeImmagini : {
            immaginiArr : [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
            ],
            title : [
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'
            ],
            text : [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ],
        }
    },

    methods: {
        iscorrente: function(indiceimmagine){
            if(indiceimmagine == this.corrente){
                return "active";
            }
            return "";
        }
    }
})

/*
//inizio immagini principali
let immagineMain =  ''; 
//creiamo una variabile let(perchè il contenuto cambia) vuota che poi andremo a riempire
let elementActive = 0;  
// creiamo una variabile e gli diamo 0 per far apparire come deaful l'immagine 0 dell array (indice immagini)( contatore)

for (let i = 0; i< ImmaginiArr.length; i++){
    //creiamo un ciclo for che va a riempire il contenuto della nostra variabile immagineMain per ogni volta fino a quando la funzione .lenght lo rende possibile 
    immagineMain += `
        <div class="item" id="item-${i}">
            <img src="${ImmaginiArr[i]}">
            <div class="ms_text">
                <h2 class="m-0 px-2"> ${title[i]}</h3>
                <p class="m-0 px-2"> ${text[i]}</h3>
            </div>    
        </div>`;
}
const contenitoreMain = document.querySelector ('.container');
contenitoreMain.innerHTML = immagineMain; //aggiungiamo ImmagineMain nella classe(specificata nel for) .container dell html 

let imgActive = document.getElementById('item-' + elementActive) 
imgActive.classList.add('active');

//fine immagine principale 


//inizio immagini laterali
let immaginiLaterali =  '';
//creiamo una variabile let(perchè il contenuto cambia) vuota che poi andremo a riempire

for (let i = 0; i< ImmaginiArr.length; i++){ 
//creiamo un ciclo for che va a riempire il contenuto della nostra variabile immagineMain per ogni volta fino a quando la funzione .lenght lo rende possibile 
    immaginiLaterali += `
        <div class="items" id="img_laterali-${i}">
            <img class="" src="${ImmaginiArr[i]}">
        </div>`;
    }
    

let contenitoreSide = document.querySelector ('.ms_side');
contenitoreSide.innerHTML += immaginiLaterali;//aggiungiamo ImmagineLaterli nella classe(specificata nel for) .ms_side dell html  
//fine immagine laterali

let immaginiLateraliOpacity = document.getElementById('img_laterali-'+ elementActive)
immaginiLateraliOpacity.classList.add('activeminiature')

//Freccie sopra e sotto
const frecciaSopra = document.getElementById ('ms_up');
const frecciaSotto = document.getElementById ('ms_down');

frecciaSopra.addEventListener('click', function() {
    if (elementActive  == 0){
        elementActive = 4
    }else{
        elementActive  --;
        //decremento dell elementActive per cambiare immagine al click
    }  
    imgActive.classList.remove('active')
    imgActive = document.getElementById('item-' + elementActive)
    imgActive.classList.add('active')

    immaginiLateraliOpacity.classList.remove('activeminiature')
    immaginiLateraliOpacity = document.getElementById('img_laterali-' + elementActive)
    immaginiLateraliOpacity.classList.add('activeminiature')
    

});

frecciaSotto.addEventListener('click', function() {
    if (elementActive  == 4){
        elementActive = 0
    }else{
        elementActive  ++;
        //incremento dell elementActive per cambiare immagine al click
    }
    imgActive.classList.remove('active')
    imgActive = document.getElementById('item-' + elementActive)
    imgActive.classList.add('active')

    immaginiLateraliOpacity.classList.remove('activeminiature')
    immaginiLateraliOpacity = document.getElementById('img_laterali-' + elementActive)
    immaginiLateraliOpacity.classList.add('activeminiature')
});


    


/*
*/