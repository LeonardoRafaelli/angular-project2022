database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45),
    PASSWORD varchar(50)
    );`).then(result => {
    console.log('Tabela criada!')
}).catch(erro => {
    console.log('Erro!')
});

// database(`INSERT INTO USER VALUES (
//     NULL,
//     "gustavin",
//     "321")`).then(result => {
//     console.log('Dados inseridos com sucesso!')
// }).catch(erro => {
//     console.log('Erro!')
// });

// database('SELECT * FROM USER').then(result => {
//     console.log(result);
//     resposta({ list: result });
// }).catch(erro => {
//     console.log(erro)
//     resposta({ erro: "Deu ruim papai" });
// });