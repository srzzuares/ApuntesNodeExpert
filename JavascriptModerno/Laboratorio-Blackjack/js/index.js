const _module = (() => {
    let cartas = [], puntosJugador = [];
    const tipoCarta = ["D", "H", "S", "C"], especiales = ["A", "J", "Q", "K"];
    const btnJuegoNuevo = document.querySelector("#btnNuevoJuego"), btnPedir = document.querySelector("#btnPedirCarta"), btnDetener = document.querySelector("#btnDetener");
    const divCartasJugadores = document.querySelectorAll(".divCartas"), puntosHTML = document.querySelectorAll("small");

    //Inicializa el juego 
    const inicioJuego = (numJugadores = 2) => {
        puntosJugador = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugador.push(0);
        };
        cartas = crearDeck();
        puntosHTML.forEach(elem => elem.innerHTML = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }
    //Crea un nuevo deck
    const crearDeck = () => {
        cartas = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipocarta of tipoCarta) {
                cartas.push(i + tipocarta);
            }
        }
        for (let tipocarta of tipoCarta) {
            for (let especial of especiales) {
                cartas.push(especial + tipocarta);
            }
        }
        return _.shuffle(cartas);
    }

    //Pide una carta
    const pideCarta = () => {
        if (cartas.length === 0) throw "No hay cartas";
        return cartas.pop();
    }

    const valorCarta = (carta) => {
        const cartaValor = carta.substring(0, carta.length - 1);
        return isNaN(cartaValor) ?
            (cartaValor === 'A') ? 11 : 10
            : cartaValor * 1;
    }

    const acumularPuntos = (turno, obtieneCarta) => {
        puntosJugador[turno] += valorCarta(obtieneCarta);
        puntosHTML[turno].innerText = puntosJugador[turno];
        return puntosJugador[turno];
    }

    const crearCarta = (turno, obtieneCarta) => {
        const createCarta = document.createElement('img');
        createCarta.src = `assets/${obtieneCarta}.png`;
        createCarta.classList.add('carta');
        divCartasJugadores[turno].append(createCarta);
    }

    const determinarGanador = () => {
        let [puntosMininmos, puntosComputadora] = puntosJugador;
        setTimeout(() => {
            if (puntosComputadora === puntosMininmos) alert("Nadie Gana");
            else if (puntosMininmos > 21) alert("Computadora Gano");
            else if (puntosComputadora > 21) alert("Jugador Gana")
            else alert("Computadora Gana");
        }, 100);
    }

    const turnoComputadora = (puntosMininmos) => {
        let puntosComputadora = 0;
        do {
            const obtieneCarta = pideCarta()
            puntosComputadora = acumularPuntos(puntosJugador.length - 1, obtieneCarta);
            crearCarta(puntosJugador.length - 1, obtieneCarta)
        } while ((puntosComputadora < puntosMininmos) && (puntosMininmos <= 21))
        determinarGanador();
    }

    btnPedir.addEventListener('click', () => {
        let obtieneCarta = pideCarta();
        const puntajeJugador = acumularPuntos(0, obtieneCarta);
        crearCarta(0, obtieneCarta);
        if (puntajeJugador > 21) {
            console.warn("Lo siento pero perdiste")
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntajeJugador);
        } else if (puntajeJugador === 21) {
            alert("Felicidades! Has ganado!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntajeJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador[0]);
    });

    btnJuegoNuevo.addEventListener('click', () => {
        inicioJuego();
    });

    return {
        iniciarJuego: inicioJuego
    };
})();