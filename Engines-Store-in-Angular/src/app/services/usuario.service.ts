import { Injectable } from '@angular/core';
import { promise } from 'protractor';

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

  removerProduto(productId){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_produto', {
        method: 'POST',
        body: JSON.stringify(
          {
            productId
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

  criarProduto(id, idForn, idEsto, nome, valor) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/criar_produto',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              id, idForn, idEsto, nome, valor
            }
        ), 
        headers: {
            'Content-Type': 'application/json'
        }
      }

      ).then(function (result) {
      console.log(result.json())
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

  criarEstoque(id, qntd, corredor, lado, prateleira) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_estoque',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              id, qntd, corredor, lado, prateleira
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
  };

  criarFornecedor(idForn, fornecedor) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_fornecedor',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              idForn, fornecedor
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
