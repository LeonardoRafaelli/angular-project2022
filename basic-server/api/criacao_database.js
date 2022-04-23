// database(`CREATE TABLE IF NOT EXISTS CEP(
//     cep CHAR(8) NOT NULL PRIMARY KEY,
//     numero VARCHAR(7)
//     );`).then(result => {
//         console.log('Tabela CEP criada!')
//     }).catch(err => {
//         console.log("Erro!", err);
//     });

database(`CREATE TABLE IF NOT EXISTS ESTOQUE (
    id INTEGER PRIMARY KEY,
    quantidade int not null
)`).then(result => {
    console.log("Tabela Estoque criada!")
}).catch(err => {
    console.log("Erro!", err);
});


database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) NOT NULL,
    PASSWORD varchar(100)
    )`).then(result => {
    console.log('Tabela Usuários criada!')
}).catch(erro => {
    console.log('Erro!', erro)
});

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    ID INTEGER PRIMARY KEY,
    NOME varchar(100) NOT NULL,
    VALOR double NOT NULL,
    IMG varchar(999999),
    CARRINHO enum(1,0)
)`).then(result => {
    console.log('Tabela Produto criada!')
}).catch(erro => {
    console.log('Erro!', erro)
});

database(`CREATE TABLE IF NOT EXISTS ADMINISTRADOR (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome varchar(45) not null,
    password varchar(100) not null
)`).then(result => {
    console.log("Tabela Administrador criada!")
}).catch(err => {
    console.log("Erro!", err);
});

database(`CREATE TABLE IF NOT EXISTS VENDAS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valor_total double not null,
    data_venda date not null,
    idComprador int not null
)`).then(result => {
    console.log("Tabela Vendas criada!")
}).catch(err => {
    console.log("Erro!", err);
});

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
    id INTEGER PRIMARY KEY not null,
    cliente_id int not null,
    produto_id int not null,
    quantidade int not null
)`).then(result => {
    console.log("Tabela Carrinho criada!")
}).catch(err => {
    console.log("Erro!", err);
});

