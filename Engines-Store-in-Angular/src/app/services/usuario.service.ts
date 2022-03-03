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

  criarProduto(nome, valor) {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/criar_produto',
    {  
        method: 'POST',
        body: JSON.stringify(
            {
              nome, valor
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
