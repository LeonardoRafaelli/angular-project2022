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


inserirRota('/criar_produto', (dados, resposta) => {
    database(`INSERT INTO PRODUTO (NOME, VALOR, IMG)
     VALUES ("${dados.nome}", ${dados.valor}, "${dados.imgBase64}")`)

    .then(result => {
        console.log('Produto inserido com sucesso!');
        resposta({ message: 'Produto inserido com sucesso!' })
    }).catch(erro => {
        console.log('Erro ao inserir o produto!')
        resposta({ erro: 'Erro ao inserir o produto!' });
    });
})

inserirRota('/alterar_produto', (dados, resposta) => {

    database(`UPDATE PRODUTO SET NOME = "${dados.nome}", VALOR = ${dados.valor}, IMG = "${dados.img}" WHERE ID = ${dados.id}`).then(result => {

        resposta({ list: result });

    }).catch(erro => {
        
        console.log(erro);
    });

});

inserirRota('/adicionar_estoque', (dados, resposta) => {
    database(`INSERT INTO ESTOQUE 
    VALUES (NULL, ${dados.qntd})`)
    .then(result => {
        resposta({message: 'Estoque do produto registrado!'});
    }).catch(err => 
        resposta({erro: 'Erro ao inserir o estoque'}))
})

inserirRota('/remover_estoque', (dados, resposta) => {
    database(`DELETE FROM ESTOQUE WHERE ID = ${dados.id}`).then(result => {
        resposta({ list: result });
    }).catch(erro => {
        console.log(erro);
    });
});


inserirRota('/alterar_estoque', (dados, resposta) => {
    database(`UPDATE ESTOQUE SET quantidade = ${dados.novoEstoque} WHERE id = ${dados.idEstoque}`).then(result => {
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