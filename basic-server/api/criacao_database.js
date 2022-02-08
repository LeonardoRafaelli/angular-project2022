database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NICKNAME varchar(15),
    PASSWORD char9
    );`).then(result => {
    console.log('Tabela criada!')
}).catch(erro => {
    console.log('Erro!')
});



// database('SELECT * FROM USER').then(result => {
//     console.log(result);
//     resposta({ list: result });
// }).catch(erro => {
//     console.log(erro)
//     resposta({ erro: "Deu ruim papai" });
// });