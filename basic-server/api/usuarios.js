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

// nome, valor, estoque, corredor, lado, prateleira, fornecedor

inserirRota('/criar_produto', (dados, resposta) => {
    // database(`INSERT INTO PRODUTO VALUES
    // ("${dados.nome}"), null`)
    // console.log("Usuário inserido!");
    // console.log(dados.json())
    // console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'É necessário preencher o nome' });
    }

    if (!dados.valor) {
        return resposta({ erro: 'É necessário preencher um valor' })
    }

    database(`INSERT INTO FORNECEDOR
    VALUES ("null", "${dados.fornecedor}")`)
    .then(result => {
        resposta({message: 'Fornecedor Registrado!'})
    }).catch(err => {
        resposta({'Erro ': err})
    })

    database(`INSERT INTO ESTOQUE 
    VALUES ("null", "${dados.estoque}", "${dados.corredor}", "${dados.lado}", "${dados.prateleira}")`)

    database(`INSERT INTO PRODUTO
     VALUES ("null", "${dados.nome}", "${dados.valor}", "null", "null")`)

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









// fetch('/api/criar_usuario',
//     {  
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 nome: "cole" , nickname: 'henrique', password: '123'
//             }
//         ), 
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function (result) {
//     return result.json();
// }).then(function (dados){
//     console.log(dados);
// }).catch(function(erro) {
//     console.log(erro);
// })




// fetch('/api/buscar_usuario',
//     {  
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// ).then(function (result) {
//     return result.json();
// }).then(function (dados){
//     console.log(dados);
// }).catch(function(erro) {
//     console.log(erro);
// })