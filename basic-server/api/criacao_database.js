database(`CREATE TABLE IF NOT EXISTS CEP(
    cep CHAR(8) NOT NULL PRIMARY KEY,
    numero VARCHAR(7)
    );`).then(result => {
        console.log('Tabela CEP criada!')
    }).catch(err => {
        console.log("Erro!", err);
    });

database(`CREATE TABLE IF NOT EXISTS ESTOQUE (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quantidade int not null,
    corredor int not null,
    lado int not null,
    prateleira int not null
)`).then(result => {
    console.log("Tabela Estoque criada!")
}).catch(err => {
    console.log("Erro!", err);
});


database(`CREATE TABLE IF NOT EXISTS FORNECEDOR (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome varchar(45) not null
)`).then(result => {
    console.log("Tabela Fornecedor criada!")
}).catch(err => {
    console.log("Erro!", err);
});



database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) NOT NULL,
    PASSWORD varchar(50) NOT NULL,
    CEP_cep char(8) not null,
    FOREIGN KEY(CEP_cep) REFERENCES CEP (cep) on update cascade on delete cascade
    )`).then(result => {
    console.log('Tabela Usuários criada!')
}).catch(erro => {
    console.log('Erro!', erro)
});

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(100) NOT NULL,
    VALOR double NOT NULL,
    ESTOQUE_id int not null,
    FORNECEDOR_id int not null,
    FOREIGN KEY (ESTOQUE_id) REFERENCES ESTOQUE (id) on update cascade on delete cascade,
    FOREIGN KEY (FORNECEDOR_id) REFERENCES FORNECEDOR (id) on update cascade on delete cascade
)`).then(result => {
    console.log('Tabela Produto criada!')
}).catch(erro => {
    console.log('Erro!', erro)
});

database(`CREATE TABLE IF NOT EXISTS ADMINISTRADOR (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome varchar(45) not null,
    password varchar(45) not null
)`).then(result => {
    console.log("Tabela Administrador criada!")
}).catch(err => {
    console.log("Erro!", err);
});

database(`CREATE TABLE IF NOT EXISTS VENDAS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valor_total double not null,
    data_venda date not null,
    USER_id int not null,
    PRODUTO_id int not null,
    FOREIGN KEY(USER_id) REFERENCES USER (id) on update cascade on delete cascade,
    FOREIGN KEY( PRODUTO_id) REFERENCES PRODUTO (id) on update cascade on delete cascade
)`).then(result => {
    console.log("Tabela Vendas criada!")
}).catch(err => {
    console.log("Erro!", err);
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
