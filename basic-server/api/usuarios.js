inserirRota('/buscar_usuario', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM USER').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/buscar_cep', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM CEP').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});


inserirRota('/criar_usuario', function(dados, resposta) {
    console.log(dados);

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