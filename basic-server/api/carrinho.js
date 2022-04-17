inserirRota('/adiciona-ao-carrinho', (dados, resposta) => {
    database(`INSERT INTO CARRINHO VALUES (NULL, ${dados.id}, ${dados.qntd})`)
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