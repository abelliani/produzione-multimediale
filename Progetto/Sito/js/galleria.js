/**/const RITARDO = 2000;
/**/var indice;
/**/var numero;
/**/var automatico;
/**/var nodoAvanti;
/**/var nodoIndietro;
/**/var nodoStartStop;
/**/var nodoNome;
/**/var nodoImg;

/**/function gestoreLoad () {
/**/    try {
/**/        nodoAvanti = document.getElementById("avanti");
/**/        nodoIndietro = document.getElementById("indietro");
/**/        nodoStartStop = document.getElementById("startStop");
/**/        nodoNome = document.getElementById("Nome");
/**/        nodoImg = document.getElementById("Img");
/**/        nodoAvanti.onclick = gestoreClickAvanti;
/**/        nodoIndietro.onclick = gestoreClickIndietro;
/**/        nodoStartStop.onclick = gestoreClickStartStop;
/**/        nodoStartStop.value = "Start";
/**/        numero = paesaggi.length;
/**/        automatico = false;
/**/        indice = 0;
/**/        cambia(0);
/**/    } catch ( e ) {
/**/        alert("gestoreLoad " + e);
/**/    }
/**/}
/**/window.onload = gestoreLoad;

/**/function gestoreClickAvanti () {
/**/    try {
/**/        if (!automatico) {
/**/            cambia(+1);
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickAvanti " + e);
/**/    }
/**/}

/**/function gestoreClickIndietro () {
/**/    try {
/**/        if (!automatico) {
/**/            cambia(-1);
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickIndietro " + e);
/**/    }
/**/}

/**/function cambia (x) {
/**/    indice += x;
/**/    if (indice == numero) {
/**/        indice = 0;
/**/    }

/**/    if (indice < 0) {
/**/        indice = numero - 1;
/**/    }

        nodoImg.setAttribute("src", paesaggi[indice].img);
        nodoNome.textContent = paesaggi[indice].nome;
/**/}

/**/function gestoreClickStartStop () {
/**/    try {
/**/        if (automatico) {
/**/            nodoStartStop.value = "Start";
/**/            automatico = false;
/**/        } else {
/**/            nodoStartStop.value = "Stop";
/**/            automatico = true;
/**/            cambiaInAutomatico();
/**/        }
/**/    } catch ( e ) {
/**/        alert("gestoreClickStartStop " + e);
/**/    }
/**/}

/**/function cambiaInAutomatico () {
/**/    try {
/**/        if (automatico) {
/**/            cambia(+1);
/**/            setTimeout(cambiaInAutomatico, RITARDO);
/**/        }
/**/    } catch ( e ) {
/**/        alert("cambiaInAutomatico " + e);
/**/    }
/**/}

var paesaggi = [
    {
        nome: "Spiaggia Su Sirboni",
        img: "immagini/spiaggia.jpg",
    },
    {
        nome: "Grotta Su Marmuri",
        img: "immagini/grotta.jpg",
    },
    {
        nome: "Sa Perda Stampada",
        img: "immagini/stampada.jpg",
    },
    {
        nome: "Nuraghe Serbissi",
        img: "immagini/serbissi.jpg",
    },
    {
        nome: "Museo Maria Lai",
        img: "immagini/museo.jpg",
    }
]