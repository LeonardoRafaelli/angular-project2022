inserirRota('/buscar_usuario', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM USER').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});


inserirRota('/criar_usuario', function(dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'É necessário preencher o nome' });
    }

    if (!dados.password) {
        return resposta({ erro: 'É necessário preencher a senha' })
    }

    database(`INSERT INTO USER
    (nome, password, CEP_cep)
     VALUES ("${dados.nome}", "${dados.password}", "${dados.cep}")`).

    then(result => {
        console.log('Usuário inserido com sucesso!');
        resposta({ message: 'Usuário inserido com sucesso!' })
    }).catch(erro => {
        console.log('Erro ao inserir o usuário!')
        resposta({ erro: 'Erro ao inserir o usuário!' });
    });
})

inserirRota('/remover_produto', (dados, resposta) => {
    database(`DELETE FROM PRODUTO WHERE nome = "${dados.removerNome}"`)
    .then(result => {
       resposta ({message: "Produto removido"})
    }).catch(erro => {
        resposta({ erro: 'Erro ao apagar produto!' });
    });
})

inserirRota('/remover_estoque', (dados, resposta) => {
    database(`DELETE FROM ESTOQUE WHERE id = ${dados.removerId}`)
    .then(result => {
        resposta ({message: "Estoque removido"})
     }).catch(erro => {
         resposta({ erro: 'Erro ao apagar estoque!' });
     });
})

inserirRota('/login', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM USER`)
        .then(result => {
            console.log("Buscou")
            resposta(result)
        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
})

inserirRota('/buscar_dados', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM ${dados.tabela}`)
        .then(result => {
            console.log(`Buscou a tabela ${dados.tabela}`)
            resposta(result)
        }).catch(erro => {
            resposta({ erro: `Erro ao buscar a tabela ${dados.tabela}!` });
        });
})


inserirRota('/adicionar_estoque', (dados, resposta) => {
    database(`INSERT INTO ESTOQUE 
    VALUES (NULL, ${dados.qntd})`)
    .then(result => {
        resposta({message: 'Estoque do produto registrado!'});
    }).catch(err => 
        resposta({erro: 'Erro ao inserir o estoque'}))
})


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


inserirRota('/adicionar_cep', (dados, resposta) => {

    database(`INSERT INTO CEP
    (cep, numero)
     VALUES ("${dados.cep}", "${dados.houseNumber}")`)

    .then(result => {
        console.log('Cep inserido com sucesso!');
        resposta({ message: 'Cep inserido com sucesso!' })
    }).catch(erro => {
        console.log('Erro ao inserir o Cep!');
        resposta({ erro: 'Erro ao inserir o Cep!' });
    });
})