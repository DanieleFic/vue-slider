
let app = new Vue({
    el: "#app",
    data: {
        corrente : 0,
        schedePosti : {
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
                'L’arcipelago di Göteborg comprende tutte le isole del comune di Öckerö e quelle del distretto di Styrsö, un quartiere di questa bella città tra i più grandi della Svezia.',
                'I villaggi tradizionali delle Alpi svizzere, come Arona, St. Moritz, Davos, Saas Fee, Cras-Montana e Gstaad, hanno un fascino senza tempo come i castelli.',
                'Big Ben è il soprannome della campana più grande della torre dell orologioe all intera torre in stile neogotico, alta 96 m, la cui edificazione iniziò nel 1834 e si concluse nel 1858',
                'In Germania si trovano alcuni dei più straordinari paesaggi naturali di tutta Europa, perfetti per escursioni in campagna e uscite in barca sui laghi alpini.',
                'Paradise è un luogo bello ',
            ],
        }
    },

    methods: {
        iscorrente: function(indiceimmagine){
            if(indiceimmagine == this.corrente){
                return "active";
            }
            return "dnone";
        },
        sopra: function(){
            this.corrente --;
            if(this.corrente < 0 ){
                this.corrente = this.schedePosti.immaginiArr.length -1;

            }
        },
        sotto: function(){
            this.corrente ++;
            if(this.corrente == this.schedePosti.immaginiArr.length){
                this.corrente = 0;
            }
        },
        
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