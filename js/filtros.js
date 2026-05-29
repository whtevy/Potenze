const catalogo =
    document.getElementById('catalogoProdutos');

const filtroPotencia =
    document.getElementById('filtroPotencia');

const filtroSoquete =
    document.getElementById('filtroSoquete');

const filtroVoltagem =
    document.getElementById('filtroVoltagem');

function criarCard(produto, index){

    return `

    <div class="produto-card">

        <div class="produto-imagem">

            <img 
                src="${produto.img}" 
                alt="${produto.nome}"
            >

        </div>

        <div class="produto-info">

            <h3>${produto.nome}</h3>

            <p>
                <strong>Potência:</strong>
                ${produto.potencia}W
            </p>

            <p>
                <strong>Lúmens:</strong>
                ${produto.lumens}
            </p>

            <p>
                <strong>Soquete:</strong>
                ${produto.soquete}
            </p>

            ${
                produto.vidaUtil
                ?
                `
                <p>
                    <strong>Vida útil:</strong>
                    ${produto.vidaUtil}
                </p>
                `
                :
                ''
            }

            <p>
                <strong>Voltagem:</strong>
                ${produto.variacao.voltagem}V
            </p>

            <a 
                href="produto.html?id=${index}"
                class="btn-produto"
            >
                Ver Mais
            </a>

        </div>

    </div>

    `;
}

function renderizarProdutos(lista){

    if(!catalogo) return;

    catalogo.innerHTML = '';

    if(lista.length === 0){

        catalogo.innerHTML = `
            <p class="sem-produtos">
                Nenhum produto encontrado.
            </p>
        `;

        return;
    }

    lista.forEach((produto, index) => {

        catalogo.innerHTML += criarCard(
            produto,
            index
        );

    });

}

function filtrarProdutos(){

    const potencia =
        filtroPotencia
        ?
        filtroPotencia.value
        :
        '';

    const soquete =
        filtroSoquete
        ?
        filtroSoquete.value
        :
        'todos';

    const voltagem =
        filtroVoltagem
        ?
        filtroVoltagem.value
        :
        'todos';

    const filtrados = produtos.filter(produto => {

        const potenciaMatch =
            potencia === '' ||
            produto.potencia.toString() === potencia;

        const soqueteMatch =
            soquete === 'todos' ||
            produto.soquete === soquete;

        const voltagemMatch =
            voltagem === 'todos' ||
            produto.variacao.voltagem === voltagem;

        return (
            potenciaMatch &&
            soqueteMatch &&
            voltagemMatch
        );

    });

    renderizarProdutos(filtrados);

}

if(filtroPotencia){

    filtroPotencia.addEventListener(
        'input',
        filtrarProdutos
    );

}

if(filtroSoquete){

    filtroSoquete.addEventListener(
        'change',
        filtrarProdutos
    );

}

if(filtroVoltagem){

    filtroVoltagem.addEventListener(
        'change',
        filtrarProdutos
    );

}

renderizarProdutos(produtos);