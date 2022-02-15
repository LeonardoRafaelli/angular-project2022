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
    (nome, password)
     VALUES ("${dados.nome}", "${dados.password}")`).


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

            resposta(result)
        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
})


inserirRota('/criar_produto', (dados, resposta) => {
    // database(`INSERT INTO PRODUTO VALUES
    // ("${dados.nome}"), null`)
    // console.log("Usuário inserido!");
    // console.log(dados.json())
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'É necessário preencher o nome' });
    }

    if (!dados.valor) {
        return resposta({ erro: 'É necessário preencher um valor' })
    }

    database(`INSERT INTO PRODUTO
    (nome_produto, valor_produto)
     VALUES ("${dados.nome}", "${dados.password}")`)

    .then(result => {
        console.log('Produto inserido com sucesso!');
        resposta({ message: 'Produto inserido com sucesso!' })
    }).catch(erro => {
        console.log('Erro ao inserir o produto!')
        resposta({ erro: 'Erro ao inserir o produto!' });
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