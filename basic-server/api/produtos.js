inserirRota('/buscar_produtos', (dados, resposta) => {
    database('SELECT * FROM PRODUTO').then(result => {
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

inserirRota('/remover_produtos', (dados, resposta) => {
    database(`DELETE FROM PRODUTO WHERE ID = ${dados.id}`).then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});