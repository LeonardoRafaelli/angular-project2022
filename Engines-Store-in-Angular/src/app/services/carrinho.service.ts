import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }


  
  adicionarAoCarrinho(id, qntd){
    return new Promise((resolve, rejected) => {
       
      fetch('/api/adiciona-ao-carrinho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id, qntd
          }
        )
      })
      .then(resultado => resolve({resultado}))
      .catch(rejeitado => rejected({rejeitado}))
    });
  }


  buscarCarrinho(){
    return new Promise((resolvido, rejeitado) => {
       
      fetch('/api/buscar-carrinho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(resultado => resultado.json())
      .then(result => resolvido(result))
      .catch(rejeitado);
    });
  }

}
