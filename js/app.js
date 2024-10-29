let totalGeral = 0;
limpar ();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split ('-') [0]; // Split é um separador que separa strings em arrays
    let valorUnitario = produto.split ('R$') [1];
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //calcular o preço, o nosso subtotal 
    let preço = valorUnitario * quantidade;

    //adicionar no carrinho 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`
    //atualizar o valor total
    totalGeral = totalGeral + preço;
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

function limpar (){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}