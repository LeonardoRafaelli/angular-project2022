import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  username = "";
  password = "";
  cep = "";
  houseNumber = "";

  ngOnInit() {
  }

  logar(){
    this.router.navigate(['/'])
  }

  registerNow(){
    if(this.cep, this.houseNumber, this.username,  this.password){
      if(this.cep.length < 8){
        alert("Por favor, insira um CEP válido!");
      } else {
        this.usuarioService.adicionarCep(this.cep, this.houseNumber);
        this.usuarioService.criarUsuario(this.username,  this.password, this.cep);
        alert("Usuário cadastrado com sucesso!")
        this.router.navigate(['/']);
      }
    } else {
      alert("Há campos não preenchidos!")
    }
  }

}
