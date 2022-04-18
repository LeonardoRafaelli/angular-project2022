inserirRota('/adiciona-ao-carrinho', (dados, resposta) => {
    database(`INSERT INTO CARRINHO (cliente_id, produto_id, quantidade) VALUES (${dados.userID}, ${dados.id}, ${dados.qntd})`)
    .then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});

inserirRota('/buscar-carrinho', (dados, resposta) => {
    database(`SELECT * FROM CARRINHO`)
    .then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});

inserirRota('/remover-produto-do-carrinho', (dados, resposta) => {
    database(`DELETE * FROM CARRINHO WHERE produto_id = ${dados.prodID}`)
    .then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});