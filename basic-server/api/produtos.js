inserirRota('/buscar_produtos', (dados, resposta) => {
    database('SELECT * FROM PRODUTO').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});

inserirRota('/buscar_estoque', (dados, resposta) => {
    database('SELECT * FROM ESTOQUE').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});

inserirRota('/alterar_produto', (dados, resposta) => {

    database(`UPDATE PRODUTO SET NOME = "${dados.nome}", VALOR = ${dados.valor}, IMG = "${dados.img}" WHERE ID = ${dados.id}`).then(result => {

        resposta({ list: result });

    }).catch(erro => {

        console.log(erro);
    });

});

inserirRota('/remover_estoque', (dados, resposta) => {
    database(`DELETE FROM ESTOQUE WHERE ID = ${dados.id}`).then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});


inserirRota('/alterar_estoque', (dados, resposta) => {

    database(`UPDATE ESTOQUE SET quantidade = ${dados.qntdEstoque} WHERE id = ${dados.id}`).then(result => {

        resposta({ list: result });

    }).catch(erro => {

        console.log(erro);
    });

});


inserirRota('/remover_produtos', (dados, resposta) => {
    database(`DELETE FROM PRODUTO WHERE ID = ${dados.id}`).then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});