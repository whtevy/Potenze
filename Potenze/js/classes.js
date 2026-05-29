class Lampada{

    constructor(
        nome,
        potencia,
        lumens,
        soquete,
        variacao,
        img
    ){

        if(this.constructor === Lampada){

            throw new Error(
                "Classe abstrata."
            );
        }

        this.nome = nome;
        this.potencia = potencia;
        this.lumens = lumens;
        this.soquete = soquete;

        this.variacao = variacao;

        this.img = img;
    }
}

class VariacaoProduto{

    constructor(
        voltagem,
        cor,
    ){

        this.voltagem = voltagem;
        this.cor = cor;
    }
}

class LedLampada extends Lampada{

    constructor(
        nome,
        potencia,
        lumens,
        soquete,
        vidaUtil,
        variacao,
        img
    ){

        super(
            nome,
            potencia,
            lumens,
            soquete,
            variacao,
            img
        );

        this.vidaUtil = vidaUtil;
    }
}

class FluorescenteLampada
extends Lampada{

    constructor(
        nome,
        potencia,
        lumens,
        soquete,
        gasInterno,
        variacao,
        img
    ){

        super(
            nome,
            potencia,
            lumens,
            soquete,
            variacao,
            img
        );

        this.gasInterno = gasInterno;
    }
}

class IncandescenteLampada
extends Lampada{

    constructor(
        nome,
        potencia,
        lumens,
        soquete,
        temperatura,
        variacao,
        img
    ){

        super(
            nome,
            potencia,
            lumens,
            soquete,
            variacao,
            img
        );

        this.temperatura = temperatura;
    }
}

class SmartLampada
extends Lampada{

    constructor(
        nome,
        potencia,
        lumens,
        soquete,
        wifi,
        variacao,
        img
    ){

        super(
            nome,
            potencia,
            lumens,
            soquete,
            variacao,
            img
        );

        this.wifi = wifi;
    }
}