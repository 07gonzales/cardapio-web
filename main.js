// Simulação de adição de produtos ao carrinho.

const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido     = document.getElementById('lista-pedido');
const totalCarrinho = document.getElementById('total');

let total = 0;

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;
        const nome = produto.querySelector('h3').textContent;
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', ''));

        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome} = R$ ${preco.toFixed(2)}`;

        listaPedido.appendChild(itemPedido);

        total += preco;


        totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;

    });
});

const botaoFinalizarPedido = document.getElementById('finalizar-pedido');

botaoFinalizarPedido.addEventListener('click', () => {
    alert("Pedido realizado com sucesso (simulação).");
});