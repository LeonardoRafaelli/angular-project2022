import { Injectable } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  buscarProdutos(){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  };
  

  removerProduto(id){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_produtos', {
        method: 'POST',
        body: JSON.stringify(
          {
            id
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
  };

  removerEstoque(id){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/remover_estoque', {
        method: 'POST',
        body: JSON.stringify(
          {
            id
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
  };





};

