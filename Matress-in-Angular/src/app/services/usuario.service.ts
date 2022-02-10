import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios() {
    return new Promise((resolve, rejeitado) => {

      fetch('/api/teste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    });
  }
}
