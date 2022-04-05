import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }


  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  }


  removerEstoque(removerId){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_estoque', {
        method: 'POST',
        body: JSON.stringify(
          {
            removerId
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  }


  removerProduto(removerNome){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_produto', {
        method: 'POST',
        body: JSON.stringify(
          {
            removerNome
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  }


  buscarDadosTabelas(tabela) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_dados', {
        method: 'POST',
        body: JSON.stringify(
          {
            tabela
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  }

  criarAdm() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_adm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  }


  criarUsuario(nome, password, cep) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/criar_usuario',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              nome, password, cep
            }
        ), 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    ).then(function (result) {
          return result.json();
      }).then(function (dados){
          console.log(dados);
      }).catch(function(erro) {
          console.log(erro);
      })
  })
  }

  // productName;
  // productPrice;
  // qntdEstoque;
  // corredor;
  // lado;
  // pratileira;

  criarProduto(nome, valor, imgBase64) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/criar_produto',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
             nome, valor, imgBase64
            }
        ), 
        headers: {
            'Content-Type': 'application/json'
        }
      }

      ).then(function (result) {
      resolvido({message: result})
      return result.json();
  }).then(function (dados){
      console.log(dados);
  })
  })
  }




// database(`CREATE TABLE IF NOT EXISTS FORNECEDOR (
//     id INTEGER PRIMARY KEY,
//     nome varchar(45) not null
// )`).then(result => {
//     console.log("Tabela Fornecedor criada!")
// }).catch(err => {
//     console.log("Erro!", err);
// });

  criarEstoque(qntd) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_estoque',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              qntd
            }
        ), 
        headers: {
            'Content-Type': 'application/json'
        }
      }
      ).then(function (result) {
        resolvido({message: result})
      }).catch((erro) => {
        rejeitado({erro: erro})
      })
  })
  };

  adicionarCep(cep, houseNumber) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_cep',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              cep, houseNumber
            }
        ), 
        headers: {
            'Content-Type': 'application/json'
        }
      }
      ).then(function (result) {
        console.log(result.json())
        return result;

      }).then(function (dados){
        console.log(dados);

      }).catch((erro) => {
        console.log(erro);
      })
  })
  }
}
