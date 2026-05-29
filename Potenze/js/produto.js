const container =
document.getElementById(
    "produtoDetalhe"
);

container.innerHTML = `

<div class="btn-voltar-box">

    <a
        href="catalogo.html"
        class="btn-voltar"
    >
        ← Voltar
    </a>

</div>

<section class="topo-produto">

    <div class="galeria">

        <div class="imagem-principal">

            <img
                src="assets/img/1.png"
                alt=""
            >

        </div>

        <div class="miniaturas">

            <img
                class="thumb"
                src="assets/img/1.png"
            >

            <img
                class="thumb"
                src="assets/img/1.png"
            >

            <img
                class="thumb"
                src="assets/img/1.png"
            >

        </div>

    </div>

    <div class="info-topo">

        <h1>
            Luminária Industrial
        </h1>

        <p class="modelo">
            Modelo PZ-120
        </p>

        <div class="estrelas">
            ★★★★☆
        </div>

        <button class="btn-orcamento">
            Entrar em Contato
        </button>

    </div>

</section>

<div class="modelo-box">

    Modelo: PZ-120

</div>

<section class="grid-especificacoes">

    <div class="spec">
        <strong>Potência</strong>
        <p>120W</p>
    </div>

    <div class="spec">
        <strong>Fluxo Luminoso</strong>
        <p>1400lm</p>
    </div>

    <div class="spec">
        <strong>Soquete</strong>
        <p>E27</p>
    </div>

    <div class="spec">
        <strong>Voltagem</strong>
        <p>220V</p>
    </div>

    <div class="spec">
        <strong>Cor</strong>
        <p>Branco Frio</p>
    </div>

    <div class="spec">
        <strong>Vida útil</strong>
        <p>50000h</p>
    </div>

</section>

<section class="descricao-produto">

    <h2>
        Sobre o produto
    </h2>

    <p>

        Desenvolvida para ambientes
        industriais e profissionais,
        garantindo alta durabilidade
        e excelente eficiência luminosa.

    </p>

</section>

<section class="avaliacoes">

    <h2>
        Avaliações
    </h2>

    <div class="mural-avaliacoes">

        <div class="avaliacao-card">

            <h4>
                Carlos
            </h4>

            <span>
                ★★★★★
            </span>

            <p>
                Excelente produto.
            </p>

        </div>

        <div class="avaliacao-card">

            <h4>
                Fernanda
            </h4>

            <span>
                ★★★★☆
            </span>

            <p>
                Muito resistente.
            </p>

        </div>

    </div>

</section>

<section class="similares">

    <h2>
        Itens semelhantes
    </h2>

    <div class="grid-similares">

        <div class="card-similar">

            <img
                src="assets/img/6.png"
                alt=""
            >

            <h3>
                Luminária High Bay
            </h3>

            <p>
                150W • E27
            </p>

            <a href="#">
                Ver produto
            </a>

        </div>

        <div class="card-similar">

            <img
                src="assets/img/IP66-1024x683.png"
                alt=""
            >

            <h3>
                Luminária Linear
            </h3>

            <p>
                70W • E27
            </p>

            <a href="#">
                Ver produto
            </a>

        </div>

        <div class="card-similar">

            <img
                src="assets/img/LUMINARIA-PUBLICA-150W-1024x819.png"
                alt=""
            >

            <h3>
                Luminária Pública
            </h3>

            <p>
                120W • E27
            </p>

            <a href="#">
                Ver produto
            </a>

        </div>

    </div>

</section>

`;

