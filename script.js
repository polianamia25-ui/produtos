//Comunicação com Banco de Dados - NO_SQL - JSON

fetch('dados.json').then(resposta=> resposta.json()).then(banco =>{
    console.log(banco)

    //FRONT END
    document.getElementById('imagem').innerHTML = banco[4].imagemProdutos.imagem001
    document.getElementById('produto').innerHTML = banco[0].produtos.prod123
    document.getElementById('preco').innerHTML = "R$" + banco[2].preco.preco789
    document.getElementById('cliente').innerHTML = banco[3].cliente.cliente01
    document.getElementById('vendedor').innerHTML = banco[1].vendedor.vend456

    document.getElementById('imagem2').innerHTML = banco[4].imagemProdutos.imagem002
    document.getElementById('produto2').innerHTML = banco[0].produtos.prod124 
    document.getElementById('preco2').innerHTML = "R$" + banco[2].preco.preco790
    document.getElementById('cliente2').innerHTML = banco[3].cliente.cliente02
    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend457

    document.getElementById('imagem3').innerHTML = banco[4].imagemProdutos.imagem003
    document.getElementById('produto3').innerHTML = banco[0].produtos.prod125 
    document.getElementById('preco3').innerHTML = "R$" + banco[2].preco.preco791
    document.getElementById('cliente3').innerHTML = banco[3].cliente.cliente03
    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend458
})