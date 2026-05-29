const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const produto = produtos[id];

const similares = produtos
    .filter((p, i) => i != id)
    .slice(0, 3);

const container =
    document.getElementById(
        "produtoDetalhe"
    );

if (!produto) {

    container.innerHTML = `
        <h1>Produto não encontrado</h1>
    `;

} else {

    container.innerHTML = `

<div class="btn-voltar-box">

    <a
        href="produtos.html"
        class="btn-voltar"
    >
        ← Voltar
    </a>

</div>

<section class="topo-produto">

    <div class="galeria">

        <div class="imagem-principal">

            <img
                src="${produto.img}"
                alt="${produto.nome}"
            >

        </div>

        <div class="miniaturas">

            <img class="thumb" src="${produto.img}" alt="${produto.nome}">
            <img class="thumb" src="${produto.img}" alt="${produto.nome}">
            <img class="thumb" src="${produto.img}" alt="${produto.nome}">

        </div>

    </div>

    <div class="info-topo">

        <h1>${produto.nome}</h1>

        <p class="modelo">
            Modelo ${produto.potencia}W
        </p>

        <div class="estrelas">
            ★★★★☆
        </div>

        <button class="btn-orcamento" href="https://wa.me/554133739799" target="_blank">
            Entrar em Contato
        </button>

    </div>

</section>

<div class="modelo-box">

    Modelo: ${produto.potencia}W

</div>

<section class="grid-especificacoes">

    <div class="spec">
        <strong>Potência</strong>
        <p>${produto.potencia}W</p>
    </div>

    <div class="spec">
        <strong>Fluxo Luminoso</strong>
        <p>${produto.lumens}lm</p>
    </div>

    <div class="spec">
        <strong>Soquete</strong>
        <p>${produto.soquete}</p>
    </div>

    <div class="spec">
        <strong>Voltagem</strong>
        <p>${produto.variacao.voltagem}V</p>
    </div>

    <div class="spec">
        <strong>Cor</strong>
        <p>${produto.variacao.cor}</p>
    </div>

    <div class="spec">
        <strong>Vida útil</strong>
        <p>${produto.vidaUtil}</p>
    </div>

</section>

<section class="descricao-produto">

    <h2>Sobre o produto</h2>

    <p>
        Desenvolvida para ambientes industriais e profissionais,
        garantindo alta durabilidade e excelente eficiência luminosa.
    </p>

</section>

<section class="avaliacoes">

    <h2>Avaliações</h2>

    <div class="mural-avaliacoes">

        <div class="avaliacao-card">
            <h4>Carlos</h4>
            <span>★★★★★</span>
            <p>Excelente produto.</p>
        </div>

        <div class="avaliacao-card">
            <h4>Fernanda</h4>
            <span>★★★★☆</span>
            <p>Muito resistente.</p>
        </div>

    </div>

</section>

<section class="similares">

    <h2>Itens semelhantes</h2>

    <div class="grid-similares">

    ${similares.map((p, i) => `

        <div class="card-similar">

            <img src="${p.img}" alt="${p.nome}">

            <h3>${p.nome}</h3>

            <p>${p.potencia}W • ${p.soquete}</p>

            <a href="produto.html?id=${produtos.indexOf(p)}">
                Ver produto
            </a>

        </div>

    `).join('')}

</div>

</section>

`;

}