const { Database } = require("sqlite3");

inserirRota('/buscar_usuario',(dados, resposta) => {

    console.log(dados);

    resposta({ok: "Requisição efetuada com sucesso!"})

})

inserirRota('/criar_usuario',
function name(dados, resposta) {
    console.log(dados);

    if(!dados.nome){
        return resposta({ erro: 'É necessário preencher o nome'});
    }

    if(!dados.nickname){
        return reposta ({erro: 'É necessário preencher o nickname'})
    }

    database(`INSERT INTO USER (nome, nickname)`
    +` VALUES ("${dados.nome}", "${dados.nickname}")`).
    then(result => {
        console.log('Usuário inserido com sucesso!');
        resposta({message: 'Usuário inserido com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao inserir o usuário!')
        resposta({erro: 'Erro ao inserir o usuário!'});
    });
})